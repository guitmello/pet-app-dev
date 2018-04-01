'use strict';

module.exports = function (app) {
  app.get('/chat', function (req, res) {
    app.server.app.controllers.chat.chat(app, req, res);
  });
};