var express = require('express');
var router = express.Router();
let controller = require('../controllers/customerController')

/* GET All Data */
router.get('/', controller.getAllData);

/* Add New Data */
router.get('/add', controller.formNewData)

/* Create New Data */
router.post('/add', controller.createNewData)

/* Edit Data */
router.post('/:id/edit', controller.editData);

/* Form Edit Data */
router.get('/:id/edit', controller.formEditData);

/* Delete Data */
router.get('/:id/delete', controller.deleteData);

/* Get One Data */
router.get('/:id', controller.getOneData);

module.exports = router;
