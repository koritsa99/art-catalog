const express = require('express');

const imagesRouter = require('./images');
const authorsRouter = require('./authors');
const authRouter = require('./auth');
const usersRouter = require('./users');

const router = express.Router();

router.use('/images', imagesRouter);
router.use('/authors', authorsRouter);
router.use('/auth', authRouter);
router.use('/users', usersRouter);

module.exports = router;
