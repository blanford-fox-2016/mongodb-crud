var express = require('express');
var router = express.Router();
const book = require('../models/book');
const customer = require('../models/customers')
const transaction = require('../models/transactions')


router.get('/', function(req, res, next) {
  book.find({},function(err,books){
    if(err)throw err;
    console.log(typeof(books));
    res.render('index', { books })
  })
});

router.post('/save', function(req, res, next) {

  var newBook = new book({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  })

  console.log(newBook);

  newBook.save(function(err){
    if(err)throw err;
    // untuk merender index lagi
    book.find({},function(err,books){
      if(err)throw err;
      console.log(typeof(books));
      res.render('index', { books })
    })
  })
});

router.post('/deleted', function(req, res, next) {
  var input_isbn = req.body.isbn;
  console.log(input_isbn);
  book.findOneAndRemove({ isbn: input_isbn }, function(err) {
  if (err) throw err;
  // unutk merender index lagi
    book.find({},function(err,books){
      if(err)throw err;
      console.log(typeof(books));
      res.render('index', { books })
    })
  });
});

router.post('/preUpdate', function(req, res, next) {
  book.findOne({ isbn: req.body.isbn },function(err,books){
    if(err)throw err;
    res.render('updateFormBook', { books })
  })
});

router.post('/update', function(req, res, next) {
  console.log("masuk neh");
  console.log(req.body);
  book.findOneAndUpdate({ isbn: req.body.isbn }, { title: req.body.title, author: req.body.author, category: req.body.category, stock: req.body.stock}, function(err, user) {
  if (err) throw err;
  // we have the updated user returned to us
  book.find({},function(err,books){
    if(err)throw err;
    res.render('index', { books })
  })
});
});









module.exports = router;
