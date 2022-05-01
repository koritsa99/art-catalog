const express = require('express');

const { getById, search } = require('../controllers/authors.controller');

const router = express.Router();

router.get('/', search);
router.get('/:authorId', getById);

module.exports = router;
