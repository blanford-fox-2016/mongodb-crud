# Mongo - CRUD

## Project Structure

```
.
├── README.md
├── app.js
├── bin
│   └── www
├── controllers
│   ├── bookController.js
│   ├── customerController.js
│   └── transactionController.js
├── models
│   ├── Book.js
│   ├── Customer.js
│   └── Transaction.js
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── routes
│   ├── book.js
│   ├── customer.js
│   ├── index.js
│   └── transaction.js
└── views
    ├── books
    ├── customers
    ├── error.jade
    ├── index.jade
    ├── layout.jade
    └── transactions

```

| Routes | HTTP | Description |
|-----|----------|------------|
| http://localhost:3000/ | GET | show home menu |
| http://localhost:3000/book | GET | show books list |
| http://localhost:3000/book/add | GET | show form new book |
| http://localhost:3000/book/add | POST | process form new book |
| http://localhost:3000/book/{id_book}/edit | GET | show form edit book |
| http://localhost:3000/book/{id_book}/edit | POST | process form edit book |
| http://localhost:3000/book/{id_book}/delete | GET | delete book |
| http://localhost:3000/customer | GET | show customers list |
| http://localhost:3000/customer/add | GET | show form new customer |
| http://localhost:3000/customer/add | POST | process form new customer |
| http://localhost:3000/customer/{id_book}/edit | GET | show form edit customer |
| http://localhost:3000/customer/{id_book}/edit | POST | process form edit customer |
| http://localhost:3000/customer/{id_book}/delete | GET | delete customer |
| http://localhost:3000/transaction | GET | show transactions list |
| http://localhost:3000/transaction/add | GET | show form new transaction |
| http://localhost:3000/transaction/add | POST | process form new transaction |
| http://localhost:3000/transaction/{id_book}/edit | GET | show form edit transaction |
| http://localhost:3000/transaction/{id_book}/edit | POST | process form edit transaction |
| http://localhost:3000/transaction/{id_book}/delete | GET | delete transaction |

## Contributor
Ken Duigraha Putra & Septian Adhi Tama

## License
MIT
