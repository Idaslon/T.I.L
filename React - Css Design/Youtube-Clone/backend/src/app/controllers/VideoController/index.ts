import { Response } from 'express';

import prisma from '~/prisma';

import { IndexRequest, ShowRequest, StoreRequest, DeleteRequest } from './types';

class FileController {
  async index(req: IndexRequest, res: Response) {
    const videos = await prisma.video.findMany({});

    return res.json(videos);
  }

  async show(req: ShowRequest, res: Response) {
    const { id } = req.params;

    const video = await prisma.video.findOne({
      where: { id: Number(id) },
    });

    if (!video) {
      return res.status(400).json({ error: 'Video not found' });
    }

    return res.json(video);
  }

  async store(req: StoreRequest, res: Response) {
    const file = await prisma.video.create({
      data: {
        path: req.body.relativePath,
      },
    });

    return res.json(file);
  }

  async delete(req: DeleteRequest, res: Response) {
    const { id } = req.params;

    await prisma.video.delete({
      where: {
        id: Number(id),
      },
    });

    return res.json({ id });
  }
}

export default new FileController();
