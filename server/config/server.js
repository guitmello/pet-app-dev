// importar modulos
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

// iniciar o objeto do express
var app = express();

/* configurar o ejs, setar variaveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './client');
app.engine('html', require('ejs').renderFile);

// configurar middleware express.static
//app.use(express.static('./client/dist'));
app.use(express.static('./server/app/public'));

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
