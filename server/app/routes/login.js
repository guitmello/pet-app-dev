'use strict';

module.exports = function (app) {
  app.get('/login', function (req, res) {
    app.server.app.controllers.login.login(app, req, res);
  });
};