"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("./controller");
var AnimalCtlr;
var AnimalRoutes = /** @class */ (function () {
    function AnimalRoutes() {
        AnimalCtlr = new controller_1.default();
    }
    AnimalRoutes.prototype.index = function (req, res) {
        return AnimalCtlr.getAll(req, res);
    };
    AnimalRoutes.prototype.create = function (req, res) {
        return AnimalCtlr.createAnimal(req, res);
    };
    AnimalRoutes.prototype.findOne = function (req, res) {
        return AnimalCtlr.getById(req, res);
    };
    AnimalRoutes.prototype.update = function (req, res) {
        return AnimalCtlr.updateAnimal(req, res);
    };
    AnimalRoutes.prototype.destroy = function (req, res) {
        return AnimalCtlr.deleteAnimal(req, res);
    };
    return AnimalRoutes;
}());
exports.default = AnimalRoutes;
