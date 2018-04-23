"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    var Mensagem = sequelize.define('Mensagem', {
        cd_mensagem_pk: {
            type: DataTypes.UUID,
            //autoIncrement: true,
            primarykey: true
        },
        ds_mensagem: {
            type: DataTypes.STRING(400)
        },
        dt_mensagem: {
            type: DataTypes.DATE
        },
        cd_chat_fk: {
            type: DataTypes.INTEGER
        }
    });
    return Mensagem;
}
exports.default = default_1;
