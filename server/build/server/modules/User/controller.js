"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var errorHandler_1 = require("../../api/responses/errorHandler");
var successHandler_1 = require("../../api/responses/successHandler");
var dbErrorHandler_1 = require("../../config/dbErrorHandler");
var service_1 = require("./service");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.getAll = function (req, res) {
        service_1.default
            .getAll()
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, "Erro ao buscar todos os usu\u00E1rios"));
    };
    UserController.prototype.create = function (req, res) {
        service_1.default
            .create(req.body)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(dbErrorHandler_1.dbErrorHandler, res))
            .catch(_.partial(errorHandler_1.onError, res, "Erro ao inserir novo usu\u00E1rio"));
    };
    UserController.prototype.getById = function (req, res) {
        var userId = parseInt(req.params.cd_usuario_pk);
        service_1.default.getById(userId)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, "Usu\u00E1rio n\u00E3o encontrado"));
    };
    UserController.prototype.updateUser = function (req, res) {
        var userId = parseInt(req.params.cd_usuario_pk);
        var props = req.body;
        service_1.default.update(userId, props)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, "Erro ao atualizar usu\u00E1rio"));
    };
    UserController.prototype.deleteUser = function (req, res) {
        var userId = parseInt(req.params.cd_usuario_pk);
        service_1.default.delete(userId)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, "Erro ao deletar usu\u00E1rio"));
    };
    return UserController;
}());
exports.default = new UserController();
