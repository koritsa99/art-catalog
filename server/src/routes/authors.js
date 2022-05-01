const express = require('express');

const {
  getById,
  search,
  getImages,
} = require('../controllers/authors.controller');

const router = express.Router();

router.get('/', search);
router.get('/:authorId', getById);
router.get('/:authorId/images', getImages);

module.exports = router;
