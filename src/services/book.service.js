const Book = require('../models/Book');

const getAllBookService = async (req, res) => {
  const result = await Book.find({});
  return result;
}

const createBookSerivce = async (body) => {
  const result = await Book.create(body);
  return result;
}

module.exports = {
  getAllBookService,
  createBookSerivce
}