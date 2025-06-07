const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' })
  }

  const token = authHeader.split(' ')[1];

  try {
    const decodeAccess = jwt.verify(token, process.env.JWT_ACCESS_TOKEN);
    req.user = decodeAccess;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid or expired token' })
  }
}

module.exports = {
  verifyToken
}