'use strict';

module.exports = function (app) {
  app.get('/favoritos', function (req, res) {
    app.server.app.controllers.favoritos.favoritos(app, req, res);
  });
};