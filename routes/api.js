var express = require('express');
var router = express.Router();
// const book = require('../models/book');
// const customer = require('../models/customers');
// const transaction = require('../models/transactions');
const controllersBook = require('../controllers/controller.book');
const controllersCustomer = require('../controllers/controller.customer');

/* Book */
router.get   ('/book', controllersBook.getAllBook );
router.post  ('/book/save', controllersBook.createNewBook );
router.post  ('/book/deleted', controllersBook.deleteBook);
router.post  ('/book/preUpdate', controllersBook.loadFormBook);
router.post  ('/book/update', controllersBook.updateBook);
/* customer */
router.get   ('/customer', controllersCustomer.getAllCustomer );
router.post   ('/customer/save', controllersCustomer.createNewCustomer );
router.post   ('/customer/deleted', controllersCustomer.deleteCustomer );
router.post   ('/customer/preUpdate', controllersCustomer.loadFormCustomer );
router.post   ('/customer/update', controllersCustomer.updateCustomer );









module.exports = router;
