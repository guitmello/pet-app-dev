"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interface_1 = require("./interface");
var model = require('../../models');
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.create = function (animal) {
        return model.Animal.create(animal);
    };
    Animal.prototype.getAll = function () {
        return model.Animal.findAll({
            order: ['nm_animal']
        })
            .then(interface_1.createAnimals);
    };
    Animal.prototype.getById = function (id) {
        return model.Animal.findOne({
            where: { id: id }
        })
            .then(interface_1.createAnimalById);
    };
    Animal.prototype.update = function (id, animal) {
        return model.Animal.update(animal, {
            where: { id: id },
            fields: ['nm_animal', 'cd_idade_animal', 'nm_cor_animal', 'ic_deficiencia_animal', 'ds_deficiencia_animal', 'ds_foto_animal', 'cd_especie_fk', 'cd_raca_fk', 'cd_usuario_fk'],
            hooks: true,
            individualHooks: true
        });
    };
    Animal.prototype.delete = function (id) {
        return model.Animal.destroy({
            where: { id: id }
        });
    };
    return Animal;
}());
exports.default = new Animal();
