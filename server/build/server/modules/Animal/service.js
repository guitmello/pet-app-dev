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
            order: ['cd_animal_pk']
        })
            .then(interface_1.createAnimals);
    };
    Animal.prototype.getById = function (cd_animal_pk) {
        return model.Animal.findOne({
            where: { cd_animal_pk: cd_animal_pk }
        })
            .then(interface_1.createAnimalById);
    };
    Animal.prototype.update = function (cd_animal_pk, animal) {
        return model.Animal.update(animal, {
            where: { cd_animal_pk: cd_animal_pk },
            fields: ['nm_animal', 'cd_idade_animal', 'nm_cor_animal', 'ic_deficiencia_animal', 'ds_deficiencia_animal', 'ds_foto_animal', 'cd_especie_fk', 'cd_raca_fk', 'cd_usuario_fk'],
            hooks: true,
            individualHooks: true
        });
    };
    Animal.prototype.delete = function (cd_animal_pk) {
        return model.Animal.destroy({
            where: { cd_animal_pk: cd_animal_pk }
        });
    };
    return Animal;
}());
exports.default = Animal;
