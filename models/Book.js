var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var booksSchema = new Schema({
  isbn:  String,
  title: String,
  author:   String,
  category: String,
  stock: Number,
  transactions: [{ type: Schema.Types.ObjectId, ref: 'transactions' }]
});

var books = mongoose.model('books', booksSchema)

module.exports = books
