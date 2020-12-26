const booksModel = require('../models/questions/questions.model.server')

const findAllBooks = () => booksModel.find()
const findBooksById = (bid) => booksModel.findById(bid)

module.exports = { findAllBooks, findBooksById }
