const express = require('express');

const { imageUpload } = require('../config/multer');
const { create, getById, search } = require('../controllers/images.controller');

const router = express.Router();

router.post('/', imageUpload.array('image'), create);
router.get('/', search);
router.get('/:imageId', getById);

module.exports = router;
