import socket from 'socket.io';

import prisma from '~/prisma';

interface ProgressData {
  progress: number;
  videoId: number;
}

interface Params {
  videoId: number;
  userId: number;
}

async function getUserVideoProgress(params: Params) {
  const { userId, videoId } = params;

  const userVideoProgresses = await prisma.userVideoProgress.findMany({
    where: {
      videoId: Number(videoId),
      userId: Number(userId),
    },
  });

  if (userVideoProgresses.length === 0) {
    return undefined;
  }

  const [targetProgress] = userVideoProgresses;

  return targetProgress;
}

class ProgressController {
  async show(client: socket.Socket) {
    const { id, videoId } = client.handshake.query;

    const videoProgress = await getUserVideoProgress({
      userId: Number(2),
      videoId: Number(videoId),
    });

    if (!videoProgress) {
      return undefined;
    }

    return {
      progress: videoProgress.value,
    };
  }

  async update(client: socket.Socket, data: ProgressData) {
    const { progress, videoId } = data;

    const videoProgress = await getUserVideoProgress({
      userId: Number(2),
      videoId: Number(videoId),
    });

    if (videoProgress) {
      await prisma.userVideoProgress.update({
        data: { value: progress },
        where: { id: videoProgress.id },
      });

      console.log('updated');
    } else {
      await prisma.userVideoProgress.create({
        data: {
          value: progress,
          video: { connect: { id: videoId } },
          user: { connect: { id: 2 } },
        },
      });
    }
  }
}

export default new ProgressController();
