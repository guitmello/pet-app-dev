// importar modulos
var express = require('express');
var path = require('path');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var appRoot = require('app-root-path');

// iniciar o objeto do express
var app = express();

/* configurar o ejs, setar variaveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
//app.set('views', './server/app/views');
app.set('views', './client')
app.engine('html', require('ejs').renderFile);

// configurar middleware express.static
app.use(express.static('./server/app/public'));
//app.use(express.static('./client'));

// configurar middleware body-parser
app.use(bodyParser.urlencoded({extended:true}));

// configurar middleware express-validator
app.use(expressValidator());

// efetuar autoload das rotas, dos models e dos controllers para o objeto app
consign()
  .include('server/app/routes')
  .then('server/app/models')
  .then('server/app/controllers')
  .into(app);

// exportar o objeto app
module.exports = app;