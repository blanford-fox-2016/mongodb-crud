# mongodb-crud

## how to show tree directory
```

1. sudo apt-get install tree
2. tree -L 2 -I node_modules ( go to your directory and use this command )
3. documentation http://www.cyberciti.biz/faq/linux-show-directory-structure-command-line/

```

## Structure App
```
.
├── README.md
├── app.js
├── bin
│   └── www
├── controllers
│   ├── controller.book.js
│   └── controller.customer.js
├── models
│   ├── book.js
│   ├── customers.js
│   └── transactions.js
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── routes
│   └── api.js
└── views
    ├── customer.ejs
    ├── index.ejs
    ├── updateFormBook.ejs
    └── updateFormCustomer.ejs
```

## Setup
```
npm install
```

## Usage
```
npm start
```

## API
| Endpoint          | HTTP | Description
|-------------------|------|------------
| `api/book`        | GET  | Get all books
| `api/book/save`   | POST | Create a new book
| `api/book/deleted` | POST | Deleted a book
| `api/book/preUpdate` | POST | load book data to edit form book
| `api/book/update` | POST  | update book data
| `api/customer`    | GET  | Get all customer
| `api/customer/save` | POST  | Create a new customer
| `api/customer/deleted` | POST  | Deleted a customer
| `api/customer/preUpdate` | POST  | load customer data to edit form customer
| `api/customer/update` | POST  | update customer data


## Licence
```
MIT
```
