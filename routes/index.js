var express = require('express');
var router = express.Router();
const Controller = require('../controller/controller')



//adding data (books)
router.post('/save',Controller.addingBook)
//view all books
router.get('/',Controller.viewAll);
//delete
router.post('/delete',Controller.deleteBook);
router.post('/loadupdate',Controller.loadUpdate);
// router.post('/update',Controller.updateBook)
module.exports = router;
