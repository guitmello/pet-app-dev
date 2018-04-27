'use strict';

module.exports = function (app) {
  app.get('/meus-pets', function (req, res) {
    app.server.app.controllers.meusPets.meusPets(app, req, res);
  });
};