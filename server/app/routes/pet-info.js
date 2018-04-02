'use strict';

module.exports = function (app) {
  app.get('/pet-info', function (req, res) {
    app.server.app.controllers.petInfo.petInfo(app, req, res);
  });
};