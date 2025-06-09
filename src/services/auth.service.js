const User = require('../models/User');
const Token = require('../models/Token');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const registerService = async (username, password) => {
  const hashed = await bcrypt.hash(password, 10);
  const newUser = await User.create({ username: username, password: hashed });
  return newUser;
}

const loginService = async (username, password) => {

  const user = await User.findOne({ username: username });

  if (!user) throw new Error('User not found!');

  const passwordValid = await bcrypt.compare(password, user.password);

  if (!passwordValid) throw new Error('Password is invalid!');

  const accessToken = jwt.sign(
    { _id: user._id, username: user.username, role: user.role },
    process.env.JWT_ACCESS_TOKEN,
    { expiresIn: '1m' }
  );

  const refreshToken = jwt.sign(
    { _id: user._id, username: user.username },
    process.env.JWT_REFRESH_TOKEN,
    { expiresIn: '7d' }
  )

  await Token.create({ refreshToken: refreshToken });

  return { user, accessToken, refreshToken };

}

const refreshTokenService = async (refreshToken) => {

  const user = jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN);

  const refreshTokenValid = await Token.findOne({ refreshToken: refreshToken });

  if (!refreshTokenValid) throw new Error('Token not found!');

  const accessTokenNew = jwt.sign({ _id: user._id, username: user.username, role: user.role }, process.env.JWT_ACCESS_TOKEN, { expiresIn: '1m' });

  const refreshTokenNew = jwt.sign({ _id: user._id, username: user.username, role: user.role }, process.env.JWT_REFRESH_TOKEN, { expiresIn: '7d' });

  return { accessToken: accessTokenNew, refreshToken: refreshTokenNew };

}

module.exports = {
  registerService,
  loginService,
  refreshTokenService
}