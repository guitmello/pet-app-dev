'use strict';

module.exports = function (app) {
  app.get('/add-pet', function (req, res) {
    app.server.app.controllers.addPet.addPet(app, req, res);
  });
};