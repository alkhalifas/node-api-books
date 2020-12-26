const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    pubDate: Date,
    edition: Number,
    type: {
        type: String,
        enum: ['HARD_COVER', 'SOFT_COVER', 'E_BOOK']},
    choices: [String]
}, {collection: 'books'});
module.exports = bookSchema;
