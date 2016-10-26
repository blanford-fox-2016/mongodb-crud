var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var transactionSchema = new Schema({
  memberid: String,
  days:Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine:Number,
  booklist:{}
});

// the schema is useless so far
// we need to create a model using it
var transaction = mongoose.model('transactions', transactionSchema);

// make this available to our users in our Node applications
module.exports = transaction;
