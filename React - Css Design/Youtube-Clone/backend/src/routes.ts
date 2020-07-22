import { Router } from 'express';

import multer from 'multer';

import SessionController from '~/app/controllers/Users/SessionController';
import UserController from '~/app/controllers/Users/UserController';
import VideoController from '~/app/controllers/VideoController';

import authMiddleware from '~/app/middlewares/auth';

import * as GlobalValidations from '~/app/validations/';
import * as SessionValidations from '~/app/validations/User/session';
import * as UserValidations from '~/app/validations/User/user';

import multerConfig from '~/config/muter';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionValidations.validateStore, SessionController.store);

routes.get('/users', UserController.index);
routes.get('/users/:id', GlobalValidations.validateParamsId, UserController.show);
routes.post('/users', UserValidations.validateStore, UserController.store);
routes.put('/users/:id', GlobalValidations.validateParamsId, UserValidations.validateUpdate, UserController.update);
routes.delete('/users/:id', GlobalValidations.validateParamsId, UserController.delete);

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

routes.use(authMiddleware);

routes.delete('/videos/:id', VideoController.delete);

routes.get('/testAuth', async (req, res) => {
  return res.json({ message: 'You are authenticated!' });
});

export default routes;
