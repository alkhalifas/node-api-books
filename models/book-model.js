const mongoose = require('mongoose');
const bookSchema = require('./book-schema');
const bookModel = mongoose.model(
    'BookModel',
    bookSchema
);
module.exports = bookModel;
