const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user', enum: ["admin", "user"] }
}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema);

module.exports = User;