/// book.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    author: String,
    images: String,
    release: String,
});

//define the book model based on schema
var Book = mongoose.model("Book", BookSchema);

//exporting it so we can use it in server.js adn anywhere it is .required
module.exports = Book;