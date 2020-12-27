const bookDao = require('../daos/book-dao')

const findAllBooks = () => bookDao.findAllBooks()
const findBooksById = (bid) => bookDao.findBooksById(bid)
const findBookByAuthor = (aname) => bookDao.findBookByAuthor(aname)
const deleteBookById = (bid) => bookDao.deleteBookById(bid)
const addNewBook = (newBook) => bookDao.addNewBook(newBook)
const updateBook = (bid, updatedBook) => bookDao.updateBook(bid, updatedBook);

module.exports = {
    findAllBooks,
    findBooksById,
    findBookByAuthor,
    deleteBookById,
    addNewBook,
    updateBook
}
