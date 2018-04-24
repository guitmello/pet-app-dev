"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var service_1 = require("../../server/modules/User/service");
var model = require('../../server/models');
describe('Testes Unitários do Controller', function () {
    describe('Método Create', function () {
        it('Deve criar um novo Usuario', function () {
            return service_1.default.create({
                cd_usuario_pk: 1,
                nm_usuario: 'teste novo usuario',
                nm_email_usuario: 'emailteste@usuario.com',
                cd_senha_usuario: '1234',
                nm_tipo_usuario: 'pessoa fisica',
                cd_cnpj_usuario: 'nao se aplica',
                cd_cpf_usuario: '99999999999',
                nm_razao_social_usuario: 'teste',
                nm_sexo_usuario: 'm',
                cd_cep_usuario: 99999999,
                nm_estado_usuario: 'teste estado',
                dt_nascimento_usuario: 1991 - 10 - 10,
                nm_cidade_usuario: 'teste cidade',
                cd_telefone_usuario: 99999999,
                cd_ip_usuario: 9999999999,
                nm_endereco_usuario: 'teste endereco',
                cd_numero_endereco_usuario: 1,
                ds_complemento_endereco_usuario: 'casa 1',
                ds_foto_usuario: 'foto'
            })
                .then(function (data) {
                helpers_1.expect(data.dataValues).to.have.all.keys(['nm_tipo_usuario', 'cd_cnpj_usuario', 'cd_cpf_usuario', 'nm_razao_social_usuario', 'nm_usuario', 'nm_email_usuario', 'nm_sexo_usuario', 'cd_senha_usuario', 'cd_cep_usuario', 'nm_estado_usuario', 'dt_nascimento_usuario', 'nm_cidade_usuario', 'cd_telefone_usuario', 'cd_ip_usuario', 'nm_endereco_usuario', 'cd_numero_endereco_usuario', 'ds_complemento_endereco_usuario', 'ds_foto_usuario']);
            });
        });
    });
    describe('Método Update', function () {
        it('Deve atualizar um Usuário', function () {
            var usuarioAtualizado = {
                nm_usuario: 'Nome atualizado'
            };
            return service_1.default.update(1, usuarioAtualizado).then(function (data) {
                helpers_1.expect(data[0]).to.be.equal(1);
            });
        });
    });
    describe('Método GET Users', function () {
        it('Deve retornar uma lista com todos os Usuários', function () {
            return service_1.default.getAll().then(function (data) {
                helpers_1.expect(data).to.be.an('array');
                helpers_1.expect(data[0]).to.have.all.keys(['nm_tipo_usuario', 'cd_cnpj_usuario', 'cd_cpf_usuario', 'nm_razao_social_usuario', 'nm_usuario', 'nm_email_usuario', 'nm_sexo_usuario', 'cd_senha_usuario', 'cd_cep_usuario', 'nm_estado_usuario', 'dt_nascimento_usuario', 'nm_cidade_usuario', 'cd_telefone_usuario', 'cd_ip_usuario', 'nm_endereco_usuario', 'cd_numero_endereco_usuario', 'ds_complemento_endereco_usuario', 'ds_foto_usuario']);
            });
        });
    });
    describe('Método GetById', function () {
        it('Retornar um usuário de acordo com o ID passado', function () {
            return service_1.default.getById(1).then(function (data) {
                helpers_1.expect(data).to.have.all.keys(['nm_tipo_usuario', 'cd_cnpj_usuario', 'cd_cpf_usuario', 'nm_razao_social_usuario', 'nm_usuario', 'nm_email_usuario', 'nm_sexo_usuario', 'cd_senha_usuario', 'cd_cep_usuario', 'nm_estado_usuario', 'dt_nascimento_usuario', 'nm_cidade_usuario', 'cd_telefone_usuario', 'cd_ip_usuario', 'nm_endereco_usuario', 'cd_numero_endereco_usuario', 'ds_complemento_endereco_usuario', 'ds_foto_usuario']);
            });
        });
    });
    describe('Método GetByEmail', function () {
        it('Retornar um usuário de acordo com o email passado', function () {
            return service_1.default.getByEmail(service_1.default.nm_email_usuario).then(function (data) {
                helpers_1.expect(data).to.have.all.keys(['nm_tipo_usuario', 'cd_cnpj_usuario', 'cd_cpf_usuario', 'nm_razao_social_usuario', 'nm_usuario', 'nm_email_usuario', 'nm_sexo_usuario', 'cd_senha_usuario', 'cd_cep_usuario', 'nm_estado_usuario', 'dt_nascimento_usuario', 'nm_cidade_usuario', 'cd_telefone_usuario', 'cd_ip_usuario', 'nm_endereco_usuario', 'cd_numero_endereco_usuario', 'ds_complemento_endereco_usuario', 'ds_foto_usuario']);
            });
        });
    });
    describe('Método Delete', function () {
        it('Deve deletar um Usuário', function () {
            return service_1.default.delete(1).then(function (data) {
                helpers_1.expect(data).to.be.equal(1);
            });
        });
    });
});
