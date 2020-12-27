const bookModel = require('../models/book-model')

const findAllBooks = () => bookModel.find()
const findBooksById = (bid) => bookModel.findById(bid)
const findBookByAuthor = (aname) => bookModel.find({'author' : aname.toLowerCase()});
const deleteBookById = (bid) => bookModel.deleteOne({_id: bid});
const addNewBook = (newBook) => bookModel.create(newBook);
const updateBook = (bid, updatedBook) => bookModel.updateOne({_id: bid}, {$set: updatedBook});

module.exports = {
    findAllBooks,
    findBooksById,
    findBookByAuthor,
    deleteBookById,
    addNewBook,
    updateBook
}
