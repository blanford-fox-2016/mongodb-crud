var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customersSchema = new Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
})


var customers = mongoose.model('customers', customersSchema)

module.exports = customers
