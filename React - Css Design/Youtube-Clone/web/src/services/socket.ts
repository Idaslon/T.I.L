import socketClient from 'socket.io-client';

import apiConfig from '~/config/api';

const socket = socketClient(apiConfig.url, { transports: ['websocket'] });

export default socket;
