let express = require('express');
let router = express.Router();
let controller = require('../controllers/bookController')


router.get('/', controller.menu)



module.exports = router;
