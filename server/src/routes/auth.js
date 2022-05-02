const express = require('express');

const {
  login,
  register,
  logout,
  resendVerificationToken,
  verify,
} = require('../controllers/auth.controller');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);
router.get('/resend-verification', resendVerificationToken);
router.get('/verify/:verificationToken', verify);

module.exports = router;
