import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

import api from '~/services/api';
import socket from '~/services/socket';

import { getThumbAndVideoUrl } from '~/utils/api';

import View from '~/components/View';

import { Video, VideoState } from '~/types';

import { InitialProgress, Progress } from './types';

enum Channels {
  PROGRESS = 'progress',
}

const Play: React.FC = () => {
  const playerRef = useRef<ReactPlayer>(null);

  const { id } = useParams();
  const [video, setVideo] = useState({} as VideoState);
  const [loadingResponse, setLoadingResponse] = useState(true);

  const [initialProgress, setInitialProgress] = useState<InitialProgress>({
    progress: 0,
  });

  const onStart = useCallback(() => {
    if (!playerRef.current) {
      return;
    }

    if (!initialProgress.loaded) {
      return;
    }

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
    [id]
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
    socket.on(Channels.PROGRESS, (data: InitialProgress) => {
      const { progress } = data;

      setInitialProgress({
        progress,
        loaded: true,
      });
    });
  }, []);

  return (
    <View loading={loadingResponse} hasData>
      <ReactPlayer
        ref={playerRef}
        url={video.videoUrl}
        controls
        volume={0}
        playing
        progressInterval={5000}
        onStart={onStart}
        onProgress={handleProgressChange}
      />
    </View>
  );
};

export default Play;
