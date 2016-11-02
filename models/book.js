var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var bookSchema = new Schema({
  isbn: String,
  title:String,
  author: String,
  category: String,
  stock: Number
});

// the schema is useless so far
// we need to create a model using it
var book = mongoose.model('book', bookSchema);

// make this available to our users in our Node applications
module.exports = book;
