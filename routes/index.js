var express = require('express');
var router = express.Router();
var Book = require('../models/books.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create', function(req, res, next){
  var buku = new Book ({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  })
  console.log(req.body);
  buku.save(function (err, data) {
    if(err)
      console.error(err);
    console.log('success');
    res.redirect('/list')
  })
})

router.get('/list', function (req, res, next) {
  Book.find(function(err, data) {
    if (err) {
      res.json({message: err})
    } else {
      res.render('list', {data})
    }
  })
})

router.get('/update/:title', function(req, res) {
  Book.where({title: req.params.title}).find((err, data) => {
    err ? console.log(err) : res.render('update', {
      data: data
    });
    // err ? console.log(err) : res.send(JSON.parse(JSON.stringify(data)))
    // err ? console.log(err) : res.send(data)
  });
})

// Book.findOneAndUpdate({author:'magician'},{author:'Ronald'},function(err, data){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })

// router.get('/update/:id', function(req, res) {
//   Book.where({_id:req.params.id}).update({isbn: req.body.isbn, title: req.body.title,
//       author: req.body.author, category: req.body.category, stock: req.body.stock},function(){
//       })
//     })



router.get('/delete/:id', function(req, res) {
  console.log(req.params.id);
  Book.where({_id:req.params.id}).findOneAndRemove(function(err, data) {
    res.redirect('/list')
  })
})


module.exports = router;
