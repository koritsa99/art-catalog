const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { nanoid } = require('nanoid');

const prisma = require('../config/prisma');

exports.register = async (req, res, next) => {
  try {
    const { password, username, email } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);
    const verificationToken = nanoid();

    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        verificationToken,
      },
    });

    const jwtPayload = { id: user.id };
    const jwtToken = jwt.sign(jwtPayload, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        authToken: jwtToken,
      },
    });

    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) {
      res.status(401);
      next(new Error('Invalid credentials'));
      return;
    }

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      res.status(401);
      next(new Error('Invalid credentials'));
      return;
    }

    const jwtPayload = { id: user.id };
    const jwtToken = jwt.sign(jwtPayload, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        authToken: jwtToken,
      },
    });

    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  try {
    await prisma.user.update({
      where: { id: req.user.id },
      data: {
        authToken: null,
      },
    });
    res.send('Success');
  } catch (error) {
    next(error);
  }
};

exports.verify = async (req, res, next) => {
  try {
    const { verificationToken } = req.params;
    const user = await prisma.user.update({
      where: { verificationToken },
      data: {
        verificationToken: null,
      },
    });
    if (!user) {
      res.status(422);
      next(new Error('Invalid verification token'));
      return;
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.resendVerificationToken = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user.verificationToken) {
      res.status(400);
      next(new Error('Already verified'));
      return;
    }

    const verificationToken = nanoid();
    const updatedUser = await prisma.user.update({
      where: { email },
      data: { verificationToken },
    });

    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};
