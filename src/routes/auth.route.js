const express = require('express');
const route = express.Router();
const { register, login, refreshToken } = require('../controllers/auth.controller');

route.post('/register', register);
route.post('/login', login);
route.post('/refresh-token', refreshToken)
module.exports = route;