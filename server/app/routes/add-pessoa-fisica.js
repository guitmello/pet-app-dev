'use strict';
const PORT = process.env.PORT || 5000;

// local
if (PORT === 5000){
  module.exports = function(app){
    app.get('/add-pessoa-fisica', function(req, res){
      app.server.app.controllers.addPessoaFisica.addPessoaFisica(app, req, res);
    });
  };
} else { // GCP
  module.exports = function(app){
    app.get('/add-pessoa-fisica', function(req, res){
      server.app.controllers.addPessoaFisica.addPessoaFisica(app, req, res);
    });
  };
}



