'use strict'
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library')

var cusSchema = mongoose.Schema({
    name: String,
    memberid: String,
    address: String,
    zipcode: Number,
    phone: String
});

var Customer = mongoose.model('customers', cusSchema);

module.exports = Customer;
