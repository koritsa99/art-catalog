const express = require('express');

const {
  findById,
  getLikes,
  getUploads,
} = require('../controllers/users.controller');

const router = express.Router();

router.get('/:userId', findById);
router.get('/:userId/likes', getLikes);
router.get('/:userId/uploads', getUploads);

module.exports = router;
