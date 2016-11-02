const Customer = require('../models/customers');

module.exports = {
  /* get all data customer form database */
  getAllCustomer : function(req, res, next){
    Customer.find({},function(err, customer){
      if(err)throw err;
      res.render('customer', { customer })
    })
  },
  /* create new customer */
  createNewCustomer : function(req, res, next){
    var newCustomer = new Customer({
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    })

      newCustomer.save(function(err){
      if(err)throw err;
      // untuk merender index lagi
      Customer.find({},function(err,customers){
        if(err)throw err;
        // res.render('customer', { customers })
        res.redirect('/api/customer')
      })
    })
  },
  /* delete customer */
  deleteCustomer: function(req, res, next) {
    var input_memberId = req.body.memberid;
    Customer.findOneAndRemove({ memberid: input_memberId }, function(err) {
    if (err) throw err;
    // unutk merender index lagi
      // Customer.find({},function(err,customers){
      //   if(err)throw err;
      //   res.render('customer', { customers })
      // })
      res.redirect('/api/customer')
    });
  },
  /* load data to edit form */
  loadFormCustomer: function(req, res, next) {
    console.log("haloo member");
    Customer.findOne({ memberid: req.body.memberid },function(err,customers){
      if(err)throw err;
      res.render('updateFormCustomer', { customers })
    })
  },
  /* update data book */
  updateCustomer: function(req, res, next) {
    Customer.findOneAndUpdate({ memberid: req.body.memberid }, { name: req.body.name, address: req.body.address, zipcode: req.body.zipcode, phone: req.body.phone}, function(err, user) {
    if (err) throw err;
    // we have the updated user returned to us
    // Customer.find({},function(err,customers){
    //   if(err)throw err;
    //   res.render('customer', { customers })
    // })
    res.redirect('/api/customer')
  });
  }

} // end module export
