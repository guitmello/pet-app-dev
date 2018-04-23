"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimalController = /** @class */ (function () {
    function AnimalController() {
    }
    AnimalController.prototype.getAll = function (req, res) {
        res.status(200).json({
            message: 'OK'
        });
    };
    AnimalController.prototype.createAnimal = function (req, res) {
        res.status(200).json({
            message: 'OK'
        });
    };
    AnimalController.prototype.getById = function (req, res) {
        res.status(200).json({
            message: 'OK'
        });
    };
    AnimalController.prototype.updateAnimal = function (req, res) {
        res.status(200).json({
            message: 'OK'
        });
    };
    AnimalController.prototype.deleteAnimal = function (req, res) {
        res.status(200).json({
            message: 'OK'
        });
    };
    return AnimalController;
}());
exports.default = AnimalController;
