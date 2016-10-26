

var mongoose = require('mongoose');

// create a schema
var TransactionSchema = new mongoose.Schema({
    member_id: String,
    days: String,
    out_date: Date,
    due_date: Date,
    in_date: Date,
    fine: Number,
    booklist: Array

});

var Transaction = mongoose.model('collection_transactions', TransactionSchema)

module.exports = Transaction
