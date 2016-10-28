let ModelTransaction = require('../models/Transaction')
let ModelCustomer = require('../models/Customer')
let ModelBook = require('../models/Book')

let getAllData = (req, res, next) => {
  ModelTransaction.find({}, (err, transactions) => {
    if (err) {
      console.log(err);
    } else {
      res.render('transactions/transactions', {title: "Book's Management", transactions: transactions})
    }
  }).sort({_id: -1})
}

let formNewData = (req, res, next) => {
  ModelTransaction.find({}, (err, transactions) => {
    if(err){
      console.log(err);
    }else{
      ModelCustomer.find({}, (err, customers) => {
        if(err){
          console.log(err);
        }else{
          ModelBook.find({}, (err, books) => {
            if(err) {
              console.log(err);
            }else{
              res.render('transactions/add_transaction', {title: "Book's Management", customers: customers, books: books})
            }
          })
        }
      })
    }
  })
}

let createNewData = (req, res, next) => {
  console.log(req.body);
}

module.exports = {
  getAllData: getAllData,
  formNewData: formNewData,
  createNewData: createNewData
}
