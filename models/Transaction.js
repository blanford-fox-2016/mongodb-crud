var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var transactionsSchema = new Schema({
  memberid: String,
  days: Number,
  out_date: new Date(ISODate().getTime()),
  due_date: new Date(ISODate().getTime()),
  in_date: new Date(ISODate().getTime()),
  fine: Number,
  booklist: [
    {isbn: String, qty: Number},
    {isbn: String, qty: Number}
  ]
})

var transactions = mongoose.model('transactions', transactionsSchema)

module.exports = transactions
