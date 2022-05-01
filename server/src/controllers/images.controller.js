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
    const { q = '', orderBy = 'createdAt', orderMethod = 'desc' } = req.query;
    const page = Number(req.query.page) || 1;
    const perPage = Number(req.query.perPage) || 1;

    const filter = {
      OR: {
        author: {
          nickname: {
            contains: q,
            mode: 'insensitive',
          },
        },
        tags: {
          some: {
            title: {
              contains: q,
              mode: 'insensitive',
            },
          },
        },
      },
    };

    const images = await prisma.image.findMany({
      include: {
        tags: true,
        author: true,
      },
      where: filter,
      take: perPage,
      skip: (page - 1) * perPage,
      orderBy: {
        [orderBy]: orderMethod,
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
