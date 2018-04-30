'use strict';

module.exports = function (app) {
  app.get('/add-pessoa-fisica', function (req, res) {
    app.server.app.controllers.addPessoaFisica.addPessoaFisica(app, req, res);
  });
};