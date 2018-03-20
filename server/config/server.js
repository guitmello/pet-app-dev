'use strict';

const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const path = require('path');

var index = require('./app/routes/index');
var app = express();

// View Engine
app.use('views', path.join(__dirname,'views'));
//app.set('views', './app/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));
//app.use(express.static('../client')); VERIFICAR

// Set Body Parser
app.use(bodyParser.urlencoded( {extended:true} ));

// Set Express Validator
app.use(expressValidator());

// Set autoload das rotas, dos models e dos controllers para o objeto app
consign()
  .include('app/routes')
  .then('app/models')
  .then('app/controllers')
  .into(app);

// exportar o objeto app
module.exports = app;