"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var errorHandler_1 = require("../../api/responses/errorHandler");
var successHandler_1 = require("../../api/responses/successHandler");
var dbErrorHandler_1 = require("../../config/dbErrorHandler");
var service_1 = require("./service");
var AnimalController = /** @class */ (function () {
    function AnimalController() {
    }
    AnimalController.prototype.getAll = function (req, res) {
        service_1.default
            .getAll()
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, "Erro ao buscar todos os animais"));
    };
    AnimalController.prototype.create = function (req, res) {
        service_1.default
            .create(req.body)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(dbErrorHandler_1.dbErrorHandler, res))
            .catch(_.partial(errorHandler_1.onError, res, "Erro ao inserir novo animal"));
    };
    AnimalController.prototype.getById = function (req, res) {
        var userId = parseInt(req.params.id);
        service_1.default.getById(userId)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, "Animal n\u00E3o encontrado"));
    };
    AnimalController.prototype.updateAnimal = function (req, res) {
        var userId = parseInt(req.params.id);
        var props = req.body;
        service_1.default.update(userId, props)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, "Erro ao atualizar animal"));
    };
    AnimalController.prototype.deleteAnimal = function (req, res) {
        var userId = parseInt(req.params.id);
        service_1.default.delete(userId)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, "Erro ao deletar animal"));
    };
    return AnimalController;
}());
exports.default = new AnimalController();
