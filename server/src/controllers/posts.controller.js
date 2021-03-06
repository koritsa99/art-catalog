const prisma = require('../config/prisma');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.create = async (req, res, next) => {
  try {
    const { author, tags, originalUrl } = req.body;
    const tagsArray = tags.split(', ');

    const newPost = await prisma.post.create({
      data: {
        uploadedBy: {
          connect: {
            id: req.user.id,
          },
        },
        author: {
          connectOrCreate: {
            create: {
              name: author,
            },
            where: {
              name: author,
            },
          },
        },
        originalUrl: originalUrl || null,
        images: req.files.map((file) => file.filename),
        tags: {
          connectOrCreate: tagsArray.map((tag) => ({
            where: {
              title: tag,
            },
            create: {
              title: tag,
            },
          })),
        },
      },
      include: {
        author: true,
        tags: true,
      },
    });

    res.json(newPost);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.search = async (req, res, next) => {
  try {
    const { q = '', orderBy = 'createdAt', orderMethod = 'desc' } = req.query;
    const page = Number(req.query.page) || 1;
    const perPage = Number(req.query.perPage) || 12;

    const filter = {
      OR: [
        {
          author: {
            name: {
              contains: q,
              mode: 'insensitive',
            },
          },
        },
        {
          tags: {
            some: {
              title: {
                contains: q,
                mode: 'insensitive',
              },
            },
          },
        },
      ],
    };

    const images = await prisma.image.findMany({
      include: {
        tags: true,
        author: true,
        // likedBy: true,
      },
      where: filter,
      take: perPage,
      skip: (page - 1) * perPage,
      orderBy: {
        [orderBy]:
          orderBy === 'likedBy'
            ? {
                _count: orderMethod,
              }
            : orderMethod,
      },
    });
    const count = await prisma.image.count({
      where: filter,
      take: perPage,
      skip: (page - 1) * perPage,
    });

    res.json({
      items: images,
      count,
      page,
      perPage,
      pagesCount: Math.ceil(count / perPage),
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.getById = async (req, res, next) => {
  try {
    const postId = Number(req.params.postId);
    const post = await prisma.post.findUnique({
      where: { id: postId },
      include: {
        author: true,
        tags: true,
        uploadedBy: true,
      },
    });

    if (!post) {
      res.status(404).json({
        message: `Post with id ${postId} not found`,
      });
      return;
    }

    res.json(post);
  } catch (error) {
    next(error);
  }
};
