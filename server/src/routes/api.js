const express = require('express');

const imagesRouter = require('./images');
const authorsRouter = require('./authors');
const authRouter = require('./auth');

const router = express.Router();

router.use('/images', imagesRouter);
router.use('/authors', authorsRouter);
router.use('/auth', authRouter);

module.exports = router;
