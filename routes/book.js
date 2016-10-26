let express = require('express');
let router = express.Router();
let controller = require('../controllers/bookController')


/* GET All Data */
router.get('/', controller.getAllData);

/* Get One Data */
router.get('/:id', controller.getOneData);

/* Form Add New Data */
router.get('/add', controller.formNewData)
/* Form Add New Data */
router.get('/add123', (req, res, next) => {
  res.send('asdfsadfasd')
  // res.render('add_book_2');
})

/* Form Edit New Data */
router.get('/:id/edit', controller.formEditData)

/* Create New Data */
router.post('/', controller.createNewData)

/* Edit Data */
router.put('/:id/edit', controller.editData);
// router.post('/:id/edit', controller.editData);

/* Delete Data */
// router.delete('/:id/delete', controller.deleteData);
router.get('/:id/delete', controller.deleteData);

module.exports = router;
