var Book = require('../models/book')
var Transaction = require('../models/transaction')
var Customer = require('../models/customer')

// var test = Book.find()
// console.log(test)

module.exports = {
    getBook: function (req, res) {
        Book.find({}, function(err, books) {
            if (err) throw err

            // object of all the users
            // console.log(books)
            res.render('books/index', {title:"Books", books:books})
        })
    },

    addBook: function (req, res) {
        var book = new Book({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        })
        book.save(function (err, book) {
            if (err) throw err

            res.redirect('/books')
        })
    },

    deleteBook: function (req, res) {
        Book.findOneAndRemove({
            _id: req.params.id
        }, function (err) {
            if (err) err

            res.redirect('/books')

        })
    },

    getEditBook: function (req, res) {
        Book.findOne({_id: req.params.id}, function(err, books) {
            if (err) throw err

            // object of all the users
            // console.log(books)
            res.render('books/edit_book', {title:"Edit Books", books:books})
        })
    },

    updateBook: function (req, res) {
        Book.findByIdAndUpdate(req.body.id, {
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        },function (err, book) {
            if (err) throw err

            res.redirect('/books')
        })
    },

    //CUSTOMER
    getCustomer: function (req, res) {
        Customer.find({}, function(err, customers) {
            if (err) throw err

            // object of all the users
            // console.log(books)
            res.render('customers/index', {title:"Customers", customers:customers})
        })
    },

    addBook: function (req, res) {
        var customer = new Customer({
            name: req.body.name,
            member_id: req.body.member_id,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        })
        customer.save(function (err, customer) {
            if (err) throw err

            res.redirect('/customers')
        })
    },

    getEditCustomer: function (req, res) {
        Customer.findOne({_id: req.params.id}, function(err, customers) {
            if (err) throw err

            // object of all the users
            // console.log(books)
            res.render('customers/edit_customer', {title:"Edit Customer", customers:customers})
        })
    },

    //TRANSACTION
    getTransaction: function (req, res) {
        Transaction.find({}, function(err, transactions) {
            if (err) throw err

            // object of all the users
            // console.log(books)
            res.render('transactions/index', {title:"Transaction", transactions:transactions})
        })
    },
}




