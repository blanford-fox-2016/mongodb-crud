let Model = require('../models/Customer')
let mongoose = require('mongoose')

let getAllData = (req, res, next) => {
  console.log(`test all data`);
  Model.find({}, (err, customers) => {
    console.log(`test : ${customers}`);
    if (err) {
      console.log(err);
    } else {
      // res.json(customer);
      res.render('customers/customers', {title: "Book's Management", customers: customers})
    }
  }).sort({_id: -1})
}

let getOneData = (req, res, next) => {

  Model.findById(req.params.id, (err, customer) => {
    if (err) {
      console.log(err);
    } else {
      res.json(customer);
    }
  })
}

let createNewData = (req, res, next) => {
  Model.create({
    name: req.body.name,
    memberid: req.body.member_id,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  }, (err, customer) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/customer')
      // res.json(customer);
    }
  })
}

let editData = (req, res, next) => {
  console.log(req.body);
  Model.update({
      _id: req.params.id
    }, req.body,
     (err, customer) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${customer.name} has been updated!`);
        res.redirect('/customer')
        // res.json(customer)
    }
  })
}

let deleteData = (req, res, next) => {
  Model.findById(req.params.id, (err, customer) => {
    if (err) {
      console.log(err);
    } else {
      customer.remove((err, customer) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Data has been deleted!`);
          res.redirect('/customer')
        }
      })
    }
  })
}

let formEditData = (req, res, next) => {
  Model.findById(req.params.id, (err, customer) => {
    res.render('customers/edit_customer', {title: "Book's Management", customer: customer})
  })
}

let formNewData = (req, res, next) => {
  res.render('customers/add_customer', {title: "Book's Management"})
}

module.exports = {
  getAllData: getAllData,
  getOneData: getOneData,
  createNewData: createNewData,
  editData: editData,
  deleteData: deleteData,
  formEditData: formEditData,
  formNewData: formNewData
}
