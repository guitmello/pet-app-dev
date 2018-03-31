'use strict';
const PORT = process.env.PORT || 5000;

// local
if (PORT === 5000){
  module.exports = function(app){
    app.get('/pet-info', function(req, res){
      app.server.app.controllers.petInfo.petInfo(app, req, res);
    });
  };
} else { // GCP
  module.exports = function(app){
    app.get('/pet-info', function(req, res){
      server.app.controllers.petInfo.petInfo(app, req, res);
    });
  };
}

