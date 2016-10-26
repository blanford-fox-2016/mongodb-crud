let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// mongoose.createConnection('mongodb://localhost/library', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('connection success!');
//   }
// });

let booksSchema = new mongoose.Schema({
  isbn:  String,
  title: String,
  author:   String,
  category: String,
  stock: Number
});

/* GET home page. */
router.get('/', (req, res, next) => {
  mongoose.model('Book', booksSchema).find({}, (err, books) => {
    if (err) {
      console.log(err);
    } else {
      res.json(books);
    }
  })
  // res.render('index', { title: 'Express' });
});

router.get('/book/:id', (req, res, next) => {
  mongoose.model('Book', booksSchema).findById(req.params.id, (err, books) => {
    if (err) {
      console.log(err);
    } else {
      res.json(books);
    }
  })
  // res.render('index', { title: 'Express' });
});

router.delete('/book/:id/delete', (req, res, next) => {
  mongoose.model('Book', booksSchema).findById(req.params.id, (err, books) => {
    if (err) {
      console.log(err);
    } else {
      books.remove((err, books) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`${books.name} has been deleted!`);
        }
      })
    }
  })
  // res.render('index', { title: 'Express' });
});

router.put('/book/:id/edit', (req, res, next) => {
  mongoose.model('Book', booksSchema).update({
      _id: req.params.id
    },
    {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
      // values: req.body
    }, (err, books) => {
      console.log(books);
      if (err) {
        console.log(err);
      } else {
        console.log(`${books.name} has been updated!`);
        res.json(books)
    }
  })
});

router.post('/', (req, res, next) => {
  mongoose.model('Book', booksSchema).create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }, (err, books) => {
    if (err) {
      console.log(err);
    } else {
      res.json(books);
    }
  })
})

module.exports = router;
