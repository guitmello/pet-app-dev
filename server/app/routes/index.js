'use strict';

module.exports = function(app){
  app.get('/', function(req, res){
    server.app.controllers.index.home(app, req, res);
  });

  app.get('/*', function(req, res) {
    res.redirect('/');
 });
};
