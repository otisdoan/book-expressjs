const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
  refreshToken: String
}, {
  timestamps: true
})

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;