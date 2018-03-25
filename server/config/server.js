'use strict';

// importar modulos
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const PORT = process.env.PORT || 5000;

// iniciar o objeto do express
var app = express();

/* configurar o ejs, setar variaveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './client');
app.engine('html', require('ejs').renderFile);

// configurar middleware express.static
if (PORT === 5000){ // localhost
  app.use(express.static('./client/dist'));
} else { // GCP
  app.use(express.static('./server/app/public'));
}

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
