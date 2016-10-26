var mongoose = require('mongoose');
mongoose.createConnection(('mongodb://localhost/library', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connection success!');
  }
});
var Schema = mongoose.Schema;

var customersSchema = new Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
})
