const booksService = require('../services/book-service')

module.exports = function (app) {

    app.get('/api/v1/books/', (req, res) =>
        booksService.findAllBooks()
            .then(allBooks => res.json(allBooks)));

    app.get('/api/v1/books/:bid', (req, res) =>
        booksService.findBooksById(req.params['bid'])
            .then(book => res.json(book)));

    // const documentation = (req, res) => {
    //     //     res.sendFile('documentation.html', {root: __dirname })
    //     // };
    //     //
    //     // app.get("/", documentation);

};
