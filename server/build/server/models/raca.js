"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    var Raca = sequelize.define('Raca', {
        nm_raca: {
            type: DataTypes.STRING,
        },
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    });
    return Raca;
}
exports.default = default_1;
