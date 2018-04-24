"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    var Animal = sequelize.define('Animal', {
        cd_animal_pk: {
            type: DataTypes.UUID,
            //autoIncrement: true,
            primarykey: true
        },
        nm_animal: {
            type: DataTypes.STRING
        },
        cd_idade_animal: {
            type: DataTypes.INTEGER
        },
        nm_cor_animal: {
            type: DataTypes.STRING
        },
        ic_deficiencia_animal: {
            type: DataTypes.BOOLEAN
        },
        ds_deficiencia_animal: {
            type: DataTypes.STRING
        },
        ds_foto_animal: {
            type: DataTypes.STRING
        },
        cd_raca_fk: {
            type: DataTypes.INTEGER,
        },
        cd_usuario_fk: {
            type: DataTypes.INTEGER,
        },
        cd_especie_fk: {
            type: DataTypes.INTEGER,
        }
    });
    return Animal;
}
exports.default = default_1;
