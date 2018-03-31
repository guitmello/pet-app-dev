'use strict';
const PORT = process.env.PORT || 5000;

// local
if (PORT === 5000){
  module.exports = function(app){
    app.get('/pesquisar', function(req, res){
      app.server.app.controllers.pesquisar.pesquisar(app, req, res);
    });
  };
} else { // GCP
  module.exports = function(app){
    app.get('/pesquisar', function(req, res){
      server.app.controllers.pesquisar.pesquisar(app, req, res);
    });
  };
}

