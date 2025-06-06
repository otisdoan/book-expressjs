
const { registerService } = require("../services/auth.service")

const register = async (req, res) => {
  const newUser = await registerService(req.body);
  console.log(newUser)
  return res.status(201).json({
    status: 'success',
    message: 'Register successfully',
    data: newUser
  })
}

module.exports = {
  register
}