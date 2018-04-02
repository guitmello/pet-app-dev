'use strict';

module.exports = function (app) {
  app.get('/pesquisar', function (req, res) {
    app.server.app.controllers.pesquisar.pesquisar(app, req, res);
  });
};