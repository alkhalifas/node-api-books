const snippetService = require('../services/snippet.service.server')

module.exports = function (app) {

    app.get('/api/snippets/', (req, res) =>
        snippetService.findAllSnippets()
            .then(allSnippets => res.json(allSnippets)));

    // const documentation = (req, res) => {
    //     //     res.sendFile('documentation.html', {root: __dirname })
    //     // };
    //     //
    //     // app.get("/", documentation);

};
