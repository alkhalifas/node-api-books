const bookService = require('../services/book-service')

module.exports = function (app) {

    app.get('/api/v1/books/', (req, res) =>
        bookService.findAllBooks()
            .then(allBooks => res.json(allBooks)));

    app.get('/api/v1/books/:bid', (req, res) =>
        bookService.findBooksById(req.params['bid'])
            .then(book => res.json(book)));

    app.get('/api/v1/author/:aname', (req, res) =>
        bookService.findBookByAuthor(req.params['aname'])
            .then(books => res.json(books)));

    app.delete('/api/v1/books/:bid', (req, res) =>
        bookService.deleteBookById(req.params['bid'])
            .then(status => res.send(status)));

    app.post('/api/v1/books/', (req, res) =>
        bookService.addNewBook(req.body)
            .then(newBook => res.json(newBook)));

    app.put('/api/v1/books/:bid', (req, res) =>
        bookService.updateBook(req.params['bid'], req.body)
            .then(status => res.send(status)));

};
