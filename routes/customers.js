var express = require('express');
var router = express.Router();
var controller = require('../controllers/index')

/* GET home page. */
router.get('/', controller.getCustomer);

router.post('/', controller.addCustomer)
//
router.get('/delete/:id', controller.deleteCustomer)
//
router.get('/edit/:id', controller.getEditCustomer)
//
router.post('/update', controller.updateCustomer)

module.exports = router;
