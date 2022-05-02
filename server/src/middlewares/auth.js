const passport = require('passport');

module.exports = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (error, user) => {
    if (error || !user) {
      res.status(401);
      next(new Error('Unauthorized'));
    } else {
      req.user = user;
      next();
    }
  });
};
