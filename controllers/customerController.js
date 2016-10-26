let Model = require('../models/Customer')


let getAllData = (req, res, next) => {
  Model.find({}, (err, customers) => {
    if (err) {
      console.log(err);
    } else {
      // res.json(customer);
      res.render('customer', {title: "Book's Management", customers: customers})
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
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  }, (err, customer) => {
    if (err) {
      console.log(err);
    } else {
      res.json(customer);
    }
  })
}

let editData = (req, res, next) => {
  Model.update({
      _id: req.params.id
    },
    {
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    }, (err, customer) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${customer.name} has been updated!`);
        res.json(customer)
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
          res.render('index')
        }
      })
    }
  })
}

module.exports = {
  getAllData: getAllData,
  getOneData: getOneData,
  createNewData: createNewData,
  editData: editData,
  deleteData: deleteData
}
