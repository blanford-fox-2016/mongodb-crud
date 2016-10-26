const Book = require('./books.js');

var db = mongoose.connection;


var thor = new Book({isbn:"979-3-19-148410-0",title:"Thor",author:"thor",category:"fiction",stock:100})

// thor.save(function(err) {
//   if (err)
//     console.log(err);
//   // db.cl-ose()
// })

Book.find(function(err, data) {
  if (err) {
    console.log(err);
  }else{
    console.log(data);
    db.close()
  }
});

// Book.where({author: 'magician'}).find((err, data) => {
//   err ? console.log(err) : console.log(data);
// });

// Book.findOneAndUpdate({author:'magician'},{author:'Ronald'},function(err, data){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })

// Book.where({author: 'thor'}).update({title: 'Avengers'})

// Book.where({title:'Thor'}).findOneAndRemove(function(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//     db.close()
//   }
// })
