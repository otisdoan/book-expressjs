const User = require('../models/User');
const Token = require('../models/Token');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const registerService = async (body) => {
  const { username, password } = body;
  const hashed = await bcrypt.hash(password, 10);
  const newUser = await User.create({ username: username, password: hashed });
  return newUser;
}

const loginService = async (body) => {
  const { username, password } = body;
  const user = await User.findOne({ username: username });
  if (!user) return res.status(404).json('Username is not found!');
  const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) return res.status(401).json('Password wrong!');
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
  try {
    await Token.create({ refreshToken: refreshToken });
  } catch (error) {
    console.log(error);
  }

  return { user, accessToken, refreshToken }
}

const refreshTokenService = async (body) => {
  // const { refreshToken } = body;
  // const user = await jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN);
  // const refreshTokenOld = await Token.findOne({ refreshToken: refreshToken });
  // if (!refreshTokenOld) return res.status(401).json({ message: 'Token is invalid' })
  // const accessTokenNew = await jwt.sign({ _id: user._id, username: user.username, role: user.role }, process.env.JWT_ACCESS_TOKEN, { expiresIn: '1m' });
  // const refreshTokenNew = await jwt.sign({ _id: user._id, username: user.username, role: user.role }, process.env.JWT_REFRESH_TOKEN, { expiresIn: '7d' });
  // return { accessTokenNew, refreshTokenNew };
}

module.exports = {
  registerService,
  loginService,
  refreshTokenService
}