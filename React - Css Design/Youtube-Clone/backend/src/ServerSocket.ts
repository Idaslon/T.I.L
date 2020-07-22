import http from 'http';
import socket from 'socket.io';

import app from './App';
import ProgressController from './app/controllers/Socket/ProgressController';

enum Channels {
  PROGRESS = 'progress',
}

class ServerSocket {
  server: http.Server;

  socket: socket.Server;

  constructor() {
    this.server = http.createServer(app);
    this.socket = socket(this.server);

    this.initClientConnection();
  }

  initClientConnection() {
    this.socket.on('connection', (client) => {
      console.log('Connected', client.id);

      this.handleSendFirstProgress(client);
      this.handleUpdateProgress(client);
      this.handleDisconect(client);
    });
  }

  handleSendFirstProgress(client: socket.Socket) {
    client.emit(Channels.PROGRESS, ProgressController.show(client));
  }

  handleUpdateProgress(client: socket.Socket) {
    client.on(Channels.PROGRESS, (data) => ProgressController.update(client, data));
  }

  handleDisconect(client: socket.Socket) {
    client.on('disconnect', () => {
      console.log('Disconnected', client.id);
    });
  }
}

export default new ServerSocket().server;
