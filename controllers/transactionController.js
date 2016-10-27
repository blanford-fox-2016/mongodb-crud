let Model = require('../models/Transaction')

let getAllData = (req, res, next) => {
  Model.find({}, (err, transactions) => {
    if (err) {
      console.log(err);
    } else {
      res.render('transactions/transactions', {title: "Book's Management", transactions: transactions})
    }
  }).sort({_id: -1})
}


module.exports = {
  getAllData: getAllData
}
