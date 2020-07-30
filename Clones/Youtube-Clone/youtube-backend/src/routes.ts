import { Router } from 'express';

import multer from 'multer';

import UserController from './app/controllers/UserController';
import VideoController from './app/controllers/VideoController';
import multerConfig from './config/multer';

const routes = Router();
const upload = multer(multerConfig);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.delete('/users/:id', UserController.delete);

routes.get('/videos', VideoController.index);
routes.get('/videos/:id', VideoController.show);

routes.post(
  '/videos',
  upload.fields([
    { name: 'thumb', maxCount: 1 },
    { name: 'video', maxCount: 1 },
  ]),
  VideoController.store
);

export default routes;
