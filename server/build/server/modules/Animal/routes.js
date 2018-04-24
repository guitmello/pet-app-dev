"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("./controller");
var AnimalRoutes = /** @class */ (function () {
    function AnimalRoutes() {
    }
    AnimalRoutes.prototype.index = function (req, res) {
        return controller_1.default.getAll(req, res);
    };
    AnimalRoutes.prototype.create = function (req, res) {
        return controller_1.default.create(req, res);
    };
    AnimalRoutes.prototype.findOne = function (req, res) {
        return controller_1.default.getById(req, res);
    };
    AnimalRoutes.prototype.update = function (req, res) {
        return controller_1.default.updateAnimal(req, res);
    };
    AnimalRoutes.prototype.destroy = function (req, res) {
        return controller_1.default.deleteAnimal(req, res);
    };
    return AnimalRoutes;
}());
exports.default = AnimalRoutes;
