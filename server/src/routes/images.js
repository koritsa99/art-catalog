const express = require('express');

const { imageUpload } = require('../config/multer');
const { create, getById, search } = require('../controllers/images.controller');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', auth, imageUpload.array('image'), create);
router.get('/', search);
router.get('/:imageId', getById);

module.exports = router;
