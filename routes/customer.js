var express = require('express');
var router = express.Router();
let controller = require('../controllers/customerController')

/* GET All Data */
router.get('/', controller.getAllData);

/* Get One Data */
router.get('/:id', controller.getOneData);

/* Create New Data */
router.post('/', controller.createNewData)

/* Edit Data */
router.put('/:id/edit', controller.editData);

/* Delete Data */
router.delete('/:id/delete', controller.deleteData);

module.exports = router;
