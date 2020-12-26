const booksDao = require('../daos/book.dao.server')

const findAllBooks = () => booksDao.findAllBooks()
const findBooksById = (bid) => booksDao.findBooksById(bid)

