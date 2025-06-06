const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  author: String,
  category: String,
  image: String,
  publisher: String,
  slug: { type: String, slug: 'title', unique: true }
}, {
  timestamps: true
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;