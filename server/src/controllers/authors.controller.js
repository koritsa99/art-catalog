const prisma = require('../config/prisma');

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
      nickname: {
        contains: q,
        mode: 'insensitive',
      },
    };
    const authors = await prisma.author.findMany({
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
      items: authors,
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
    const authorId = Number(req.params.authorId);
    const author = await prisma.author.findUnique({
      where: { id: authorId },
    });
    if (!author) {
      res.status(404).json({
        message: `Author with id ${req.params.imageId} not found`,
      });
      return;
    }

    res.json(author);
  } catch (error) {
    next(error);
  }
};
