module.exports = function(app){
    app.get('/', function(app, req, res){
        app.controllers.index.home(app, req, res);
    });
}
