let express = require('express');
let router = express.Router();
let controller = require('../controllers/bookController')


// router.get('/', controller.menu)
router.get('/', controller.formNewData)



module.exports = router;
