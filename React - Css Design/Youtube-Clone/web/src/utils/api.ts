import apiConfig from '~/config/api';

export function getThumbAndVideoUrl(path: string) {
  const fullPath = `${apiConfig.url}/files/${path}`;

  return {
    thumbUrl: `${fullPath}/thumb.png`,
    videoUrl: `${fullPath}/video.mp4`,
  };
}
