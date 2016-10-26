var mongoose = require('mongoose');
mongoose.createConnection(('mongodb://localhost/library', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connection success!');
  }
});
var Schema = mongoose.Schema;

var transactionsSchema = new Schema({
  memberid: String,
  days: Number,
  // out_date: ISODate(new Date().toISOString()),
  // due_date: ISODate(new Date().toISOString()),
  // in_date: ISODate(new Date().toISOString()),
  fine: Number,
  booklist: [
    {isbn: String, qty: Number},
    {isbn: String, qty: Number}
  ]
})
