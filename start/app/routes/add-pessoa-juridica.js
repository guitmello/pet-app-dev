'use strict';

module.exports = function (app) {
  app.get('/add-pessoa-juridica', function (req, res) {
    app.server.app.controllers.addPessoaJuridica.addPessoaJuridica(app, req, res);
  });
};