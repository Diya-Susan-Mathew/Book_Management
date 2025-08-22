const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  title: {
    type:String,
    required: [true,'Title is required']
  },
  author: {
    type: String,
    required: [true,'Author is required']
  },
  publishedYear: {
    type: Number
  },
  genre: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});
const Book = mongoose.model('Book',bookSchema);
module.exports = Book;