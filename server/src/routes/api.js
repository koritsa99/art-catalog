const express = require('express');

const imagesRouter = require('./images');

const router = express.Router();

router.use('/images', imagesRouter);

module.exports = router;
