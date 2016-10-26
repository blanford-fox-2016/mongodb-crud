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
  },
  deleteBook:function(req, res, next) {
    Book.findByIdAndRemove({ _id:req.body.delete }, function(err) {
      if (err) throw err;
      Book.find({}, function(err, data) {
        if (err) throw err;
        console.log(data);
        res.render('error', {data})
      });
    });
  },
  loadUpdate:function(req, res, next) {
    console.log(req.body.update);
    var test = req.body.update
    Book.find({ _id: test }, function(err, user) {
      if (err) throw err;
      console.log(user);
      res.render('update', {user,test})
    });
  },
  updateBook:function(req, res, next) {
    console.log(req.body.update +"ini test");
    Book.findByIdAndUpdate(req.body.update,
    {isbn:req.body.isbn,
    title:req.body.title,
    author:req.body.author,
    category:req.body.category},
    function(err, data) {
    if (err) throw err;
    console.log(data);
    // we have the updated user returned to us
    res.redirect('/')
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
