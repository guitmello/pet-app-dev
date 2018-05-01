"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
var jwt = require("jwt-simple");
//import * as bcrypt from 'bcrypt';
var config = require('../../config/env/config')();
var Handlers = /** @class */ (function () {
    function Handlers() {
    }
    Handlers.prototype.authFail = function (req, res) {
        res.sendStatus(HTTPStatus.UNAUTHORIZED);
    };
    Handlers.prototype.authSuccess = function (res, credentials, data) {
        //const isMatch = bcrypt.compareSync(credentials.cd_senha_usuario, data.cd_senha_usuario);
        var isMatch = (credentials.password == data.password);
        if (isMatch) {
            var payload = {
                id: data.id
            };
            res.json({
                token: jwt.encode(payload, config.secret)
            });
        }
        else {
            res.sendStatus(HTTPStatus.UNAUTHORIZED);
        }
    };
    Handlers.prototype.onError = function (res, message, err) {
        console.log("Error: " + err);
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message);
    };
    Handlers.prototype.onSuccess = function (res, data) {
        res.status(HTTPStatus.OK).json({
            payload: data
        });
    };
    Handlers.prototype.errorHandlerApi = function (err, req, res, next) {
        console.error("API error handler foi executado: " + err);
        res.status(500).json({
            errorCode: 'ERR-001',
            message: 'Erro interno no servidor'
        });
    };
    Handlers.prototype.dbErrorHandler = function (res, err) {
        console.log("Erro: " + err);
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
            code: 'Err-01',
            messageUser: 'Erro ao criar usuário',
        });
    };
    return Handlers;
}());
exports.default = new Handlers();
