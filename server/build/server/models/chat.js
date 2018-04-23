"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    var Chat = sequelize.define('Chat', {
        cd_chat_pk: {
            type: DataTypes.UUID,
            //autoIncrement: true,
            primarykey: true
        },
        cd_usuario_enviou_fk: {
            type: DataTypes.INTEGER
        },
        cd_usuario_recebeu_fk: {
            type: DataTypes.INTEGER
        },
        cd_ip_usuario_enviou_fk: {
            type: DataTypes.UUID
        },
        cd_ip_usuario_recebeu_fk: {
            type: DataTypes.UUID
        }
    });
    return Chat;
}
exports.default = default_1;
