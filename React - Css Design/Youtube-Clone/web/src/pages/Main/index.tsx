import React, { useState, useEffect, useCallback } from 'react';

import api from '~/services/api';
import history from '~/services/history';

import { getThumbAndVideoUrl } from '~/utils/api';

import View from '~/components/View';

import { Video, VideoState } from '~/types';

import { Container, VideoList, VideoDetails, VideoImage, VideoFooter, VideoName, VideoUsername } from './styles';

const Main = () => {
  const [videos, setVideos] = useState([] as VideoState[]);
  const [loadingResponse, setLoadingResponse] = useState(true);

  const handlePlayVideo = useCallback((video: VideoState) => {
    history.push(`/play/${video.id}`);
  }, []);

  useEffect(() => {
    async function loadAndSetData() {
      setLoadingResponse(true);
      const response = await api.get<Video[]>('/videos');

      const videosState = response.data.map((video) => {
        const { thumbUrl, videoUrl } = getThumbAndVideoUrl(video.path);

        return {
          ...video,
          thumbUrl,
          videoUrl,
        };
      });

      setVideos(videosState);
      setLoadingResponse(false);
    }

    loadAndSetData();
  }, []);

  return (
    <View loading={loadingResponse} hasData={videos.length > 0}>
      <Container>
        <VideoList>
          {videos.map((video) => (
            <VideoDetails key={String(video.id)} onClick={() => handlePlayVideo(video)}>
              <VideoImage src={video.thumbUrl} />
              <VideoFooter>
                <VideoName>Meu video incrivel</VideoName>
                <VideoUsername>Destroyeer</VideoUsername>
              </VideoFooter>
            </VideoDetails>
          ))}
        </VideoList>
      </Container>
    </View>
  );
};

export default Main;
