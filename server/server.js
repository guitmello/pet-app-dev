'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

// View Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.usr(express.static(path.join(__dirname, 'client')));
