"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interface_1 = require("./interface");
var model = require('../../models');
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.create = function (user) {
        return model.User.create(user);
    };
    User.prototype.getAll = function () {
        return model.User.findAll({
            order: ['nm_usuario']
        })
            .then(interface_1.createUsers);
    };
    User.prototype.getById = function (id) {
        return model.User.findOne({
            where: { id: id }
        })
            .then(interface_1.createUserById);
    };
    User.prototype.getByEmail = function (nm_email_usuario) {
        return model.User.findOne({
            where: { nm_email_usuario: nm_email_usuario }
        })
            .then(interface_1.createUserByEmail);
    };
    User.prototype.update = function (id, user) {
        return model.User.update(user, {
            where: { id: id },
            fields: ['nm_usuario', 'nm_email_usuario', 'cd_senha_usuario', 'nm_tipo_usuario', 'cd_cnpj_usuario', 'cd_cpf_usuario', 'nm_razao_social_usuario', 'nm_sexo_usuario', 'cd_cep_usuario', 'nm_estado_usuario', 'dt_nascimento_usuario', 'nm_cidade_usuario', 'cd_telefone_usuario', 'cd_ip_usuario', 'nm_endereco_usuario', 'cd_numero_endereco_usuario', 'ds_complemento_endereco_usuario', 'ds_foto_usuario'],
            hooks: true,
            individualHooks: true
        });
    };
    User.prototype.delete = function (id) {
        return model.User.destroy({
            where: { id: id }
        });
    };
    return User;
}());
exports.default = new User();
