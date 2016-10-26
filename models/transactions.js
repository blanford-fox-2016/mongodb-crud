'use strict'
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library')

var transSchema = mongoose.Schema({
    memberid: String,
    days: String,
    out_date: Date,
    due_date: Date,
    in_date: Date,
    fine: Number
    booklist: Array
});

var Transaction = mongoose.model('transactions', transSchema);

module.exports = Transaction;
