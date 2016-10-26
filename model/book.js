// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var bookSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  category: String
},{collection:'book'});

var book = mongoose.model('book',bookSchema);
module.exports = book;
