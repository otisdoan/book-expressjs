const express = require('express');
const route = express.Router();
const { getAllBook, createBook } = require('../controllers/book.controller');

route.get('/', getAllBook);
route.post('/', createBook)

module.exports = route;