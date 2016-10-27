let express = require('express');
let router = express.Router();
let controller = require('../controllers/bookController')


/* GET All Data */
router.get('/', controller.getAllData);

/* Form Add New Data */
router.get('/add', controller.formNewData)

/* Create New Data */
router.post('/add', controller.createNewData)

/* Edit Data */
// router.put('/:id/edit', controller.editData);
router.post('/:id/edit', controller.editData);

/* Form Edit New Data */
router.get('/:id/edit', controller.formEditData)

/* Delete Data */
// router.delete('/:id/delete', controller.deleteData);
router.get('/:id/delete', controller.deleteData);

/* Get One Data */
router.get('/:id', controller.getOneData);

module.exports = router;
