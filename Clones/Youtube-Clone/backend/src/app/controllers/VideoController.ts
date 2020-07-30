import { Request, Response } from 'express';

import prisma from '~/prisma';

class FileController {
  async index(req: Request, res: Response) {
    const videos = await prisma.video.findMany({});

    return res.json(videos);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const video = await prisma.video.findOne({
      where: { id: Number(id) },
    });

    if (!video) {
      return res.status(400).json({ error: 'Video not found' });
    }

    return res.json(video);
  }

  async store(req: Request, res: Response) {
    const file = await prisma.video.create({
      data: {
        path: req.body.relativePath,
      },
    });

    return res.json(file);
  }
}

export default new FileController();
