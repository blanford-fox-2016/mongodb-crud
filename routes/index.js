var express = require('express');
var router = express.Router();
const Controller = require('../controller/controller')



//adding data (books)
router.post('/save',Controller.addingBook)
//view all books
router.get('/',Controller.viewAll);
//update
// router.post('/delete',Controller.delete)
module.exports = router;
