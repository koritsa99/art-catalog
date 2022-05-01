const prisma = require('../config/prisma');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.search = async (req, res, next) => {
  try {
    const { q = '' } = req.query;

    const authors = await prisma.author.findMany({
      where: {
        nickname: {
          contains: q,
          mode: 'insensitive',
        },
      },
    });

    res.json(authors);
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
