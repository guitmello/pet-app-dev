module.exports = function(app){
  app.get('/', function(req, res){
    // Heroku
    app.controllers.index.home(app, req, res);
    // Local
    //app.server.app.controllers.index.home(app, req, res);
  });
};

