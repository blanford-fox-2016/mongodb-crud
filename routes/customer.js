var express = require('express');
var router = express.Router();
let controller = require('../controllers/customerController')

/* GET All Data */
router.get('/', controller.formNewData);

/* Get One Data */
router.get('/:id', controller.getOneData);

/* Create New Data */
router.post('/', controller.createNewData)

// router.get('/list', controller.getAllData)

/* Edit Data */
router.post('/:id/edit', controller.editData);

router.get('/:id/edit', controller.formEditData);

/* Delete Data */
router.get('/:id/delete', controller.deleteData);

module.exports = router;
