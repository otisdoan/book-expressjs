const express = require('express');
const route = express.Router();
const bookRoutes = require('./book.route');
const authRoutes = require('./auth.route');

route.use('/books', bookRoutes);
route.use('/users', authRoutes);

module.exports = route;