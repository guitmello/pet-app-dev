module.exports = function(app){
    app.get('/', function(app, req, res){
        server.app.app.controllers.index.home(app, req, res);
    });
}
