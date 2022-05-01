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

    const newImage = await prisma.image.create({
      data: {
        author: {
          connectOrCreate: {
            create: {
              nickname: author,
            },
            where: {
              nickname: author,
            },
          },
        },
        originalUrl: originalUrl || null,
        imageUrls: req.files.map(
          (file) => `${process.env.BASE_URL}/images/${file.filename}`
        ),
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

    res.json(newImage);
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
    const {
      author = '',
      page = 1,
      perPage = 12,
      tags = '',
      orderBy = 'createdAt',
      orderMethod = 'desc',
    } = req.query;

    const tagsArr = tags.length > 1 ? tags.split(', ') : [];

    const images = await prisma.image.findMany({
      include: {
        tags: true,
        author: true,
      },
      where: {
        author: {
          nickname: {
            contains: author,
            mode: 'insensitive',
          },
        },
        tags:
          tagsArr.length > 0
            ? {
                some: {
                  title: {
                    in: tagsArr,
                    mode: 'insensitive',
                  },
                },
              }
            : undefined,
      },
      take: Number(perPage),
      skip: (Number(page) - 1) * Number(perPage),
      orderBy: {
        [orderBy]: orderMethod,
      },
    });

    res.json(images);
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
    const imageId = Number(req.params.imageId);
    const image = await prisma.image.findUnique({
      where: { id: imageId },
      include: {
        author: true,
        tags: true,
      },
    });

    if (!image) {
      res.status(404).json({
        message: `Image with id ${req.params.imageId} not found`,
      });
      return;
    }

    res.json(image);
  } catch (error) {
    next(error);
  }
};
