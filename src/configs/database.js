const mongoose = require('mongoose');

const connection = async () => {
  try {
    await mongoose.connect('mongodb://otisdoan:anhzac12345@localhost:27017/project-expressks?authSource=admin')
  } catch (error) {
    console.log(error)
  }
}

module.exports = connection;