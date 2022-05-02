const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt');
const passport = require('passport');

const prisma = require('./prisma');

const jwtStrategy = new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
}, async (payload, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: payload.id },
    });

    if (!user) {
      done(null, false);
    } else {
      done(null, user);
    }
  } catch (error) {
    done(error, false);
  }
});

passport.use(jwtStrategy);