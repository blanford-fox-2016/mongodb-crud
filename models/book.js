

var mongoose = require('mongoose');

// create a schema
var BookSchema = new mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    category: String,
    stock: Number

});

var Book = mongoose.model('collection_books', BookSchema)

module.exports = Book
