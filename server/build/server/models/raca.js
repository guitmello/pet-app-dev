"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    var Raca = sequelize.define('Raca', {
        nm_raca: {
            type: DataTypes.STRING,
        },
        cd_raca_pk: {
            type: DataTypes.UUID,
            //autoIncrement: true,
            primarykey: true
        }
    });
    return Raca;
}
exports.default = default_1;
