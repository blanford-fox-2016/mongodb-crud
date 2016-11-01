let ModelTransaction = require('../models/Transaction')
let ModelCustomer = require('../models/Customer')
let ModelBook = require('../models/Book')

let getAllData = (req, res, next) => {
  ModelTransaction.
  findOne({_id: "58133139d72ef10e95721a6b"}).
  populate({
    path: 'memberid'
  }).
  exec((err, data) => {
    if(err){
      console.log(err);
    }else{
      // console.log(`asdf`);
      console.log(data);
      // console.log('aa ' + data.memberid + " bb");
    }
    // res.json(transaction)
  })

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

  ModelTransaction.create({
    days: req.body.days,
    memberid: req.body.memberid,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    booklist: req.body.booklist
  }, (err, transaction) => {
    if (err) {
      console.log(err);
    } else {
      console.log(transaction);
      res.redirect('/transaction')
      // res.json(books);
    }
  })
}

module.exports = {
  getAllData: getAllData,
  formNewData: formNewData,
  createNewData: createNewData
}
