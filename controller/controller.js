var express = require('express');
const Book = require('../model/book');
const Customers = require('../model/customers');

module.exports = {
  addingBook : function(req, res, next) {
    var newBook = Book({
      isbn:req.body.isbn,
      title:req.body.title,
      author:req.body.author,
      category:req.body.category
    })
    newBook.save(function(err) {
      if (err) throw err;
      Book.find({}, function(err, data) {
        if (err) throw err;
        console.log(data);
        res.render('error', {data, hasil:"data "})
      });
    });
  },
  viewAll :function(req, res, next) {
    Book.find({}, function(err, data) {
      if (err) throw err;
      console.log(data);
      res.render('error', {data})
    });
  }
  // },
  // deleteBook:functionfunction(req, res, next) {
  //   Book.find({}, function(err, data) {
  //     if (err) throw err;
  //     console.log(data);
  //     res.render('error', {data})
  //   });
  // }
}
