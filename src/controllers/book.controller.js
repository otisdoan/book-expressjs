const { getAllBookService, createBookSerivce } = require('../services/book.service');

const getAllBook = async (req, res) => {
  const books = await getAllBookService();
  return res.status(200).json({
    status: 'success',
    data: books
  })
}

const createBook = async (req, res) => {
  const book = await createBookSerivce(req.body);
  return res.status(201).json({
    status: 'success',
    message: 'Book created successfully',
    data: book
  })
}

module.exports = {
  getAllBook,
  createBook
}