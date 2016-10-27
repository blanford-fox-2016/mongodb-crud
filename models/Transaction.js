var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var transactionsSchema = new Schema({
  memberid: String,
  days: Number,
  out_date: { type: Date, default: Date.now },
  due_date: { type: Date, default: Date.now },
  in_date: { type: Date, default: Date.now },
  fine: Number,
  booklist: [
    {isbn: String, qty: Number},
    {isbn: String, qty: Number}
  ]
})

var transactions = mongoose.model('transactions', transactionsSchema)

module.exports = transactions
