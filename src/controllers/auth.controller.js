const { registerService } = require("../services/auth.service")

const register = async (req, res) => {
  const newUser = await registerService(req.body);
}

module.exports = {
  register
}