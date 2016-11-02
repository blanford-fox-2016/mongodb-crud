const Book = require('../models/book');

module.exports = {

/* show all data book */
getAllBook : function(req, res, next) {
  Book.find({},function(err,books){
    if(err)throw err;
    console.log(typeof(books));
    res.render('index', { books })
  })
},
/* insert new book */
createNewBook : function(req, res, next) {
  var newBook = new Book({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  })

  // console.log(newBook);
  console.log("masuk");

  newBook.save(function(err){
    if(err)throw err;
    // untuk merender index lagi
    console.log("masuk neh dar");
    res.redirect('/api/book')
  })
},
/* deleted book from database */
deleteBook: function(req, res, next) {
  console.log("daata masuk neh");
  var input_isbn = req.body.isbn;
  console.log(input_isbn);
  Book.findOneAndRemove({ isbn: input_isbn }, function(err) {
  if (err) throw err;
  // unutk merender index lagi
    Book.find({},function(err,books){
      if(err)throw err;
      console.log(typeof(books));
      res.render('index', { books })
    })
  });
},
/* load data to edit form */
loadFormBook: function(req, res, next) {
  Book.findOne({ isbn: req.body.isbn },function(err,books){
    if(err)throw err;
    res.render('updateFormBook', { books })
  })
},
/* update data book */
updateBook: function(req, res, next) {
  console.log("masuk neh");
  console.log(req.body);
  Book.findOneAndUpdate({ isbn: req.body.isbn }, { title: req.body.title, author: req.body.author, category: req.body.category, stock: req.body.stock}, function(err, user) {
  if (err) throw err;
  // we have the updated user returned to us
  Book.find({},function(err,books){
    if(err)throw err;
    res.render('index', { books })
  })
});
}

} // end of module exports
