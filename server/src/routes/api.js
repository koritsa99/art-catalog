const express = require('express');

const imagesRouter = require('./images');
const authorsRouter = require('./authors');

const router = express.Router();

router.use('/images', imagesRouter);
router.use('/authors', authorsRouter);

module.exports = router;
