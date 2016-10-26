let Model = require('../models/Customer')


let getAllData = (req, res, next) => {
  Model.find({}, (err, customers) => {
    if (err) {
      console.log(err);
    } else {
      // res.json(customer);
      res.render('customers', {title: "Book's Management", customers: customers})
    }
  })
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
    },
    {
      name: req.body.name,
      memberid: req.body.member_id,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    }, (err, customer) => {
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
    res.render('edit_customer', {title: "Book's Management", customer: customer})
  })
}

let formNewData = (req, res, next) => {
  Model.find({}, (err, customers) => {
    if (err) {
      console.log(err);
    } else {
      // res.json(customer);
      res.render('add_customer', {title: "Book's Management", customers: customers})
    }
  })
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
