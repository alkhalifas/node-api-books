const bookService = require('../services/book.service.server')

module.exports = function (app) {

    app.get('/api/books/', (req, res) =>
        bookService.findAllBooks()
            .then(allBooks => res.json(allBooks)));

    app.get('/api/books/:bid', (req, res) =>
        bookService.findBooksById(req.params['bid'])
            .then(book => res.json(book)));

    // const documentation = (req, res) => {
    //     //     res.sendFile('documentation.html', {root: __dirname })
    //     // };
    //     //
    //     // app.get("/", documentation);

};
