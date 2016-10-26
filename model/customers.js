// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var customerSchema = new Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone:String
});

var customers = mongoose.model('customers',customerSchema);
module.exports = customers;
