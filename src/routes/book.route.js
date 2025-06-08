const express = require('express');
const route = express.Router();
const { getAllBook, createBook } = require('../controllers/book.controller');
const { verifyToken } = require('../middlewares/verifyToken');
const authorizeRoles = require('../middlewares/authorizeRoles');

route.get('/', verifyToken, getAllBook);
route.post('/', createBook)

module.exports = route;