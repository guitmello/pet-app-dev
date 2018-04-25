"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var api_1 = require("./api/api");
var config = require('./config/env/config')();
var server = http.createServer(api_1.default);
var models = require('./models');
models.sequelize.sync().then(function () {
    server.listen(config.serverPort);
    server.on('listening', function () { return console.log("Server rodando na porta " + config.serverPort); });
    server.on('error', function (error) { return console.log("Ocorreu o erro: " + error); });
});
