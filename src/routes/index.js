const express = require('express');
const route = express.Router();
const bookRoutes = require('./book.route');
const authRoutes = require('./auth.route');
const paymentRoutes = require('./payment.route');

route.use('/books', bookRoutes);
route.use('/auth', authRoutes);
route.use('/payment', paymentRoutes);

module.exports = route;