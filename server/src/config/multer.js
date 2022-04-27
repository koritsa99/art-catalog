const multer = require('multer');

const { IMAGES_PATH } = require('./constants');

exports.imageUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, IMAGES_PATH);
    },
    filename: (req, file, cb) => {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    },
  }),
});
