var express = require('express');
var router = express.Router();
var controller = require('../controllers/index')
var mongoose = require('mongoose')
var Book = require('../models/book')

/* GET home page. */
router.get('/', controller.getBook);

router.post('/', controller.addBook)

router.get('/delete/:id', controller.deleteBook)

router.get('/edit/:id', controller.getEditBook)

router.post('/update', controller.updateBook)

module.exports = router;
