"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    var Especie = sequelize.define('Especie', {
        nm_especie: {
            type: DataTypes.STRING,
        },
        cd_especie_pk: {
            type: DataTypes.UUID,
            //autoIncrement: true,
            primarykey: true
        }
    });
    return Especie;
}
exports.default = default_1;
