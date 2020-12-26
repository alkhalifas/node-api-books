const mongoose = require('mongoose');
const bookSchema = require('./books-schema');
const bookModel = mongoose.model(
    'BooksModel',
    bookSchema
);
module.exports = bookModel;
