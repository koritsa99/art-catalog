const express = require('express');

const prisma = require('../config/prisma');

const router = express.Router();

router.get('/', async (req, res, next) => {
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
});

router.get('/:authorId', async (req, res, next) => {
  try {
    const author = await prisma.author.findUnique({
      where: {
        id: Number(req.params.authorId),
      },
    });

    res.json(author);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
