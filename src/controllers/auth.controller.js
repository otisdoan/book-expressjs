
const { registerService, loginService, refreshTokenService } = require("../services/auth.service")

const register = async (req, res) => {
  const { username, password } = req.body;
  const newUser = await registerService(username, password);
  console.log(newUser)
  return res.status(201).json({
    status: 'success',
    message: 'Register successfully',
    data: newUser
  })
}

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const account = await loginService(username, password);
    return res.status(200).json({
      status: 'success',
      message: 'Login successfully',
      data: account
    })
  } catch (error) {
    res.status(401).json({
      status: 'fail',
      message: error.message
    })
  }
}

const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    const results = await refreshTokenService(refreshToken);
    return res.status(200).json({
      status: 'success',
      data: results
    })
  } catch (error) {
    res.status(401).json({
      status: 'fail',
      message: error.message
    })
  }
}

module.exports = {
  register,
  login,
  refreshToken
}