const prisma = require('../config/prisma');

exports.findById = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: +userId,
      },
    });
    if (!user) {
      res.status(404);
      next(new Error('User not found'));
      return;
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.getLikes = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: +userId,
      },
      include: {
        likes: {
          include: {
            author: true,
            tags: true,
          },
        },
      },
    });
    if (!user) {
      res.status(404);
      next(new Error('User not found'));
      return;
    }

    res.json(user.likes);
  } catch (error) {
    next(error);
  }
};

exports.getUploads = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: +userId,
      },
      include: {
        images: {
          include: {
            author: true,
            tags: true,
          },
        },
      },
    });
    if (!user) {
      res.status(404);
      next(new Error('User not found'));
      return;
    }

    res.json(user.images);
  } catch (error) {
    next(error);
  }
};
