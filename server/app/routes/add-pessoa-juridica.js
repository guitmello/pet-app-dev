'use strict';
const PORT = process.env.PORT || 5000;

// local
if (PORT === 5000){
  module.exports = function(app){
    app.get('/add-pessoa-juridica', function(req, res){
      app.server.app.controllers.addPessoaJuridica.addPessoaJuridica(app, req, res);
    });
  };
} else { // GCP
  module.exports = function(app){
    app.get('/add-pessoa-juridica', function(req, res){
      server.app.controllers.addPessoaJuridica.addPessoaJuridica(app, req, res);
    });
  };
}


