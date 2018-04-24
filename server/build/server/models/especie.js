"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    var Especie = sequelize.define('Especie', {
        nm_especie: {
            type: DataTypes.STRING,
        },
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    });
    return Especie;
}
exports.default = default_1;
