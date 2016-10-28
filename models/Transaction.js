var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var transactionsSchema = new Schema({
  memberid: { type: Schema.Types.ObjectId, ref: 'customers' },
  days: Number,
  out_date: { type: Date, default: Date.now },
  due_date: { type: Date, default: Date.now },
  in_date: { type: Date, default: Date.now },
  fine: Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'books' }]
})

var transactions = mongoose.model('transactions', transactionsSchema)

module.exports = transactions
