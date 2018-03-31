'use strict';
const PORT = process.env.PORT || 5000;

// local
if (PORT === 5000){
  module.exports = function(app){
    app.get('/meus-pets', function(req, res){
      app.server.app.controllers.meusPets.meusPets(app, req, res);
    });
  };
} else { // GCP
  module.exports = function(app){
    app.get('/meus-pets', function(req, res){
      server.app.controllers.meusPets.meusPets(app, req, res);
    });
  };
}

