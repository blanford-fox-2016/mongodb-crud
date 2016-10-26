const Book = require('./books.js');


var thor = new Book({isbn:"979-3-19-148410-0",title:"Thor",author:"thor",category:"fiction",stock:100})

thor.save(function(err) {
  if (err)
    console.log(err);
  // db.close()
})
