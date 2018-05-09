'use strict';

module.exports = function (app) {
  app.get('/edit-pet', function (req, res) {
    app.server.app.controllers.editPet.editPet(app, req, res);
  });
};