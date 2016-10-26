var express = require('express');
var router = express.Router();
var controller = require('../controllers/index')

/* GET home page. */
router.get('/', controller.getCustomer);

// router.post('/', controller.addBook)
//
// router.get('/delete/:id', controller.deleteBook)
//
// router.get('/edit/:id', controller.getEditBook)
//
// router.post('/update', controller.updateBook)

module.exports = router;
