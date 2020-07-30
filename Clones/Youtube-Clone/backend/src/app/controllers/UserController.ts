import { Request, Response } from 'express';

import prisma from '~/prisma';

class UserController {
  async index(req: Request, res: Response) {
    const users = await prisma.user.findMany();

    return res.json(users);
  }

  async store(req: Request, res: Response) {
    const { name, email } = req.body;

    const userAlreadyExists = await prisma.user.findOne({ where: { email } });

    if (userAlreadyExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return res.json(user);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await prisma.user.delete({
      where: { id: +id },
    });

    return res.status(201).json({ id: +id });
  }
}

export default new UserController();
