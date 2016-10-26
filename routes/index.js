var express = require('express');
var router = express.Router();
var controller = require('../controllers/index')
var mongoose = require('mongoose')
var Book = require('../models/book')

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {title: "Home"})
});

module.exports = router;
