// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var transactionsSchema = new Schema({
  memberid:[{ type: Schema.Types.memberid, ref: 'customers' }]
  days: Number,
  out_date: Date,
  due_date:Date,
  in_date:Date,
  booklist:[
    {isbn:[{ type: Schema.Types.isbn, ref: 'book' }],qty:Number}
  ]

});

var transactions = mongoose.model('transactions',customerSchema);
module.exports = transactions;
