'use strict'
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library')

var BookSchema = mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    category: String,
    stock: Number
});

var Book = mongoose.model('books', BookSchema);

module.exports = Book;
