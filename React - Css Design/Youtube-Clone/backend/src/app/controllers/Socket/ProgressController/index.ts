import socket from 'socket.io';

import prisma from '~/prisma';

import { ProgressData } from './types';

class ProgressController {
  show(client: socket.Socket) {
    return {
      progress: 10,
    };
  }

  async update(client: socket.Socket, data: ProgressData) {
    console.log('Updating', data);

    const { progress: progressValue } = data;

    const progress = await prisma.progress.findOne({
      where: {
        id: data.videoId,
      },
    });

    if (progress) {
      await prisma.progress.update({
        data: { value: progressValue },
        where: { id: progress.id },
      });

      return;
    }

    await prisma.progress.create({
      data: {
        // user: {connect: {id: 1}},
      },
    });
  }
}

export default new ProgressController();
