const User = require('../models/User');
const bcrypt = require('bcryptjs');

const registerService = async (body) => {
  const { username, password } = body;
  const hashed = await bcrypt.hash(password, 10);
  const newUser = await User.create({ username: username, password: hashed });
  return newUser;
}

module.exports = {
  registerService
}