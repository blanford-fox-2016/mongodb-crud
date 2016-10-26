let Model = require('../models/Book')

let getAllData = (req, res, next) => {
  Model.find({}, (err, books) => {
    if (err) {
      console.log(err);
    } else {
      // res.json(books);
      res.render('books', {title: "Book's Management", books: books})
    }
  })
}

let getOneData = (req, res, next) => {
  Model.findById(req.params.id, (err, books) => {
    if (err) {
      console.log(err);
    } else {
      res.json(books);
    }
  })
}

let createNewData = (req, res, next) => {
  Model.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }, (err, books) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('book')
      // res.json(books);
    }
  })
}

let editData = (req, res, next) => {
  Model.update({
      _id: req.params.id
    },
    {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }, (err, books) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${books.name} has been updated!`);
        // res.json(books)
        res.redirect('/book')
    }
  })
}

let deleteData = (req, res, next) => {
  Model.findById(req.params.id, (err, books) => {
    if (err) {
      console.log(err);
    } else {
      books.remove((err, books) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Data has been deleted!`);
          // res.render('index')
          res.redirect('/book')
        }
      })
    }
  })
}

let menu = (req, res, next) => {
  res.render('index', {title: "Book's Management"})
}

let formNewData = (req, res, next) => {
  console.log(`asdf`);
  res.render('add_book', {title: "Book's Management"})
}

let formEditData = (req, res, next) => {
  Model.findById(req.params.id, (err, books) => {
    res.render('edit_book', {title: "Book's Management", books})
  })
}

module.exports = {
  getAllData: getAllData,
  getOneData: getOneData,
  createNewData: createNewData,
  editData: editData,
  deleteData: deleteData,
  menu: menu,
  formNewData: formNewData,
  formEditData: formEditData
}
