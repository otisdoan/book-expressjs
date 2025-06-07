const User = require('../models/User');
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
  const { _id, username, password } = body;
  console.log(_id)
  const user = await User.findOne({ username: username });
  if (!user) return res.status(404).json('Username is not found!');
  const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) return res.status(401).json('Password wrong!');
  const accessToken = jwt.sign(
    { _id: user._id, username: user.username, role: user.role },
    process.env.JWT_ACCESS_TOKEN,
    { expiresIn: '5m' }
  );
  const refreshToken = jwt.sign(
    { _id: user._id, username: user.username },
    process.env.JWT_REFRESH_TOKEN,
    { expiresIn: '7d' }
  )
  return { user, accessToken, refreshToken }
}
module.exports = {
  registerService,
  loginService
}