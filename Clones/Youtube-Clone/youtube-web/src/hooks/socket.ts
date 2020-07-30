import { useMemo } from 'react';

import socketClient from 'socket.io-client';

import apiConfig from '~/config/api';

interface SocketParams {
  userId: number | string;
  videoId: number | string;
}

export function useSocket(params: SocketParams) {
  const { userId, videoId } = params;
  const query = `id=${userId}&videoId=${videoId}`;

  const socket = useMemo(() => {
    const clientSocket = socketClient(apiConfig.url, { transports: ['websocket'], query });

    // [Bug] Calls 2 times instead of 1

    return clientSocket;
  }, [query]);

  return socket;
}
