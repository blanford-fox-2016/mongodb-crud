let express = require('express');
let router = express.Router();
let controller = require('../controllers/bookController')


/* GET All Data */
router.get('/', controller.getAllData);

/* Get One Data */
router.get('/book/:id', controller.getOneData);

/* Form Add New Data */
router.get('/add', controller.formNewData)

/* Create New Data */
router.post('/', controller.createNewData)

/* Edit Data */
router.put('/book/:id/edit', controller.editData);

/* Delete Data */
router.delete('/book/:id/delete', controller.deleteData);

module.exports = router;
