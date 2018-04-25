"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var service_1 = require("../User/service");
var authSuccess_1 = require("../../api/responses/authSuccess");
var authFail_1 = require("../../api/responses/authFail");
var TokenRoutes = /** @class */ (function () {
    function TokenRoutes() {
    }
    TokenRoutes.prototype.auth = function (req, res) {
        var credentials = {
            nm_email_usuario: req.body.nm_email_usuario,
            cd_senha_usuario: req.body.cd_senha_usuario
        };
        if (credentials.hasOwnProperty('nm_email_usuario') && credentials.hasOwnProperty('cd_senha_usuario')) {
            service_1.default
                .getByEmail(credentials.nm_email_usuario)
                .then(_.partial(authSuccess_1.default, res, credentials))
                .catch(_.partial(authFail_1.default, req, res));
        }
    };
    return TokenRoutes;
}());
exports.default = new TokenRoutes();
