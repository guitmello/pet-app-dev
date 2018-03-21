module.exports = function(app){
  app.get('/', function(req, res){
    app.server.app.controllers.index.home(app, req, res);
  });
};

