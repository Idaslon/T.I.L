import './bootstrap';

import express, { Express } from 'express';

import { resolve } from 'path';

import routes from './routes';

const uploadUrl = resolve(__dirname, '..', 'tmp', 'uploads');

class App {
  server: Express;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use('/files', express.static(uploadUrl));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
