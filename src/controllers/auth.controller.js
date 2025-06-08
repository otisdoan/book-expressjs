
const { registerService, loginService, refreshTokenService } = require("../services/auth.service")

const register = async (req, res) => {
  const newUser = await registerService(req.body);
  console.log(newUser)
  return res.status(201).json({
    status: 'success',
    message: 'Register successfully',
    data: newUser
  })
}

const login = async (req, res) => {
  const account = await loginService(req.body);
  return res.status(200).json({
    status: 'success',
    message: 'Login successfully',
    data: account
  })
}

const refreshToken = async (req, res) => {
  await refreshTokenService(req.body);
}

module.exports = {
  register,
  login,
  refreshToken
}