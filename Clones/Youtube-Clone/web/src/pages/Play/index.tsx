import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

import { useSocket } from '~/hooks/socket';

import api from '~/services/api';

import { getThumbAndVideoUrl } from '~/utils/api';

import { Video, VideoState } from '~/types';

import { InitialProgressState, Progress, InitialProgressResponse } from './types';

enum Channels {
  PROGRESS = 'progress',
}

const Play: React.FC = () => {
  const { id } = useParams();

  const playerRef = useRef<ReactPlayer>(null);

  const socket = useSocket({ videoId: id, userId: 2 });

  const [video, setVideo] = useState({} as VideoState);
  const [loadingResponse, setLoadingResponse] = useState(true);

  const [initialProgress, setInitialProgress] = useState<InitialProgressState>({
    progress: 0,
  });

  const onStart = useCallback(() => {
    if (!playerRef.current) {
      return;
    }

    if (!initialProgress.loaded) {
      return;
    }

    console.log('seek', initialProgress);

    playerRef.current.seekTo(initialProgress.progress);
  }, [initialProgress]);

  const handleProgressChange = useCallback(
    (currentProgress: Progress) => {
      console.log(`Updating to ${currentProgress.playedSeconds}`);

      socket.emit(Channels.PROGRESS, {
        progress: currentProgress.playedSeconds,
        videoId: Number(id),
      });
    },
    [id, socket]
  );

  useEffect(() => {
    async function loadAndSetData() {
      setLoadingResponse(true);

      const response = await api.get<Video>(`/videos/${id}`);

      const { thumbUrl, videoUrl } = getThumbAndVideoUrl(response.data.path);

      setVideo({
        ...response.data,
        thumbUrl,
        videoUrl,
      });

      setLoadingResponse(false);
    }

    loadAndSetData();
  }, [id]);

  useEffect(() => {
    socket.on(Channels.PROGRESS, (data: InitialProgressResponse) => {
      const { progress } = data;

      setInitialProgress({
        progress,
        loaded: true,
      });
    });
  }, [socket]);

  if (loadingResponse) {
    return <h2>Carregando...</h2>;
  }

  return (
    <ReactPlayer
      ref={playerRef}
      url={video.videoUrl}
      controls
      volume={0}
      playing
      progressInterval={1000}
      onStart={onStart}
      onProgress={handleProgressChange}
    />
  );
};

export default Play;
