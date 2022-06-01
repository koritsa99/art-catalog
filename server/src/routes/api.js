const express = require('express');

const postsRouter = require('./posts');
const authorsRouter = require('./authors');
const authRouter = require('./auth');
const usersRouter = require('./users');

const router = express.Router();

router.use('/posts', postsRouter);
router.use('/authors', authorsRouter);
router.use('/auth', authRouter);
router.use('/users', usersRouter);

module.exports = router;
