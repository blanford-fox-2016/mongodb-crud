

var mongoose = require('mongoose');

// create a schema
var CustomerSchema = new mongoose.Schema({
    name: String,
    member_id: String,
    address: String,
    zipcode: String,
    phone: String

});

var Customer = mongoose.model('collection_customers', CustomerSchema)

module.exports = Customer
