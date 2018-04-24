"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var id = _a.id, nm_tipo_usuario = _a.nm_tipo_usuario, cd_cnpj_usuario = _a.cd_cnpj_usuario, cd_cpf_usuario = _a.cd_cpf_usuario, nm_razao_social_usuario = _a.nm_razao_social_usuario, nm_usuario = _a.nm_usuario, nm_email_usuario = _a.nm_email_usuario, nm_sexo_usuario = _a.nm_sexo_usuario, cd_senha_usuario = _a.cd_senha_usuario, cd_cep_usuario = _a.cd_cep_usuario, nm_estado_usuario = _a.nm_estado_usuario, dt_nascimento_usuario = _a.dt_nascimento_usuario, nm_cidade_usuario = _a.nm_cidade_usuario, cd_telefone_usuario = _a.cd_telefone_usuario, cd_ip_usuario = _a.cd_ip_usuario, nm_endereco_usuario = _a.nm_endereco_usuario, cd_numero_endereco_usuario = _a.cd_numero_endereco_usuario, ds_complemento_endereco_usuario = _a.ds_complemento_endereco_usuario, ds_foto_usuario = _a.ds_foto_usuario;
    return {
        id: id, nm_tipo_usuario: nm_tipo_usuario, cd_cnpj_usuario: cd_cnpj_usuario, cd_cpf_usuario: cd_cpf_usuario, nm_razao_social_usuario: nm_razao_social_usuario, nm_usuario: nm_usuario, nm_email_usuario: nm_email_usuario, nm_sexo_usuario: nm_sexo_usuario, cd_senha_usuario: cd_senha_usuario, cd_cep_usuario: cd_cep_usuario, nm_estado_usuario: nm_estado_usuario, dt_nascimento_usuario: dt_nascimento_usuario, nm_cidade_usuario: nm_cidade_usuario, cd_telefone_usuario: cd_telefone_usuario, cd_ip_usuario: cd_ip_usuario, nm_endereco_usuario: nm_endereco_usuario, cd_numero_endereco_usuario: cd_numero_endereco_usuario, ds_complemento_endereco_usuario: ds_complemento_endereco_usuario, ds_foto_usuario: ds_foto_usuario
    };
}
exports.createUser = createUser;
function createUsers(data) {
    return data.map(createUser);
}
exports.createUsers = createUsers;
function createUserById(_a) {
    var id = _a.id, nm_tipo_usuario = _a.nm_tipo_usuario, cd_cnpj_usuario = _a.cd_cnpj_usuario, cd_cpf_usuario = _a.cd_cpf_usuario, nm_razao_social_usuario = _a.nm_razao_social_usuario, nm_usuario = _a.nm_usuario, nm_email_usuario = _a.nm_email_usuario, nm_sexo_usuario = _a.nm_sexo_usuario, cd_senha_usuario = _a.cd_senha_usuario, cd_cep_usuario = _a.cd_cep_usuario, nm_estado_usuario = _a.nm_estado_usuario, dt_nascimento_usuario = _a.dt_nascimento_usuario, nm_cidade_usuario = _a.nm_cidade_usuario, cd_telefone_usuario = _a.cd_telefone_usuario, cd_ip_usuario = _a.cd_ip_usuario, nm_endereco_usuario = _a.nm_endereco_usuario, cd_numero_endereco_usuario = _a.cd_numero_endereco_usuario, ds_complemento_endereco_usuario = _a.ds_complemento_endereco_usuario, ds_foto_usuario = _a.ds_foto_usuario;
    return {
        id: id, nm_tipo_usuario: nm_tipo_usuario, cd_cnpj_usuario: cd_cnpj_usuario, cd_cpf_usuario: cd_cpf_usuario, nm_razao_social_usuario: nm_razao_social_usuario, nm_usuario: nm_usuario, nm_email_usuario: nm_email_usuario, nm_sexo_usuario: nm_sexo_usuario, cd_senha_usuario: cd_senha_usuario, cd_cep_usuario: cd_cep_usuario, nm_estado_usuario: nm_estado_usuario, dt_nascimento_usuario: dt_nascimento_usuario, nm_cidade_usuario: nm_cidade_usuario, cd_telefone_usuario: cd_telefone_usuario, cd_ip_usuario: cd_ip_usuario, nm_endereco_usuario: nm_endereco_usuario, cd_numero_endereco_usuario: cd_numero_endereco_usuario, ds_complemento_endereco_usuario: ds_complemento_endereco_usuario, ds_foto_usuario: ds_foto_usuario
    };
}
exports.createUserById = createUserById;
function createUserByEmail(_a) {
    var id = _a.id, nm_tipo_usuario = _a.nm_tipo_usuario, cd_cnpj_usuario = _a.cd_cnpj_usuario, cd_cpf_usuario = _a.cd_cpf_usuario, nm_razao_social_usuario = _a.nm_razao_social_usuario, nm_usuario = _a.nm_usuario, nm_email_usuario = _a.nm_email_usuario, nm_sexo_usuario = _a.nm_sexo_usuario, cd_senha_usuario = _a.cd_senha_usuario, cd_cep_usuario = _a.cd_cep_usuario, nm_estado_usuario = _a.nm_estado_usuario, dt_nascimento_usuario = _a.dt_nascimento_usuario, nm_cidade_usuario = _a.nm_cidade_usuario, cd_telefone_usuario = _a.cd_telefone_usuario, cd_ip_usuario = _a.cd_ip_usuario, nm_endereco_usuario = _a.nm_endereco_usuario, cd_numero_endereco_usuario = _a.cd_numero_endereco_usuario, ds_complemento_endereco_usuario = _a.ds_complemento_endereco_usuario, ds_foto_usuario = _a.ds_foto_usuario;
    return {
        id: id, nm_tipo_usuario: nm_tipo_usuario, cd_cnpj_usuario: cd_cnpj_usuario, cd_cpf_usuario: cd_cpf_usuario, nm_razao_social_usuario: nm_razao_social_usuario, nm_usuario: nm_usuario, nm_email_usuario: nm_email_usuario, nm_sexo_usuario: nm_sexo_usuario, cd_senha_usuario: cd_senha_usuario, cd_cep_usuario: cd_cep_usuario, nm_estado_usuario: nm_estado_usuario, dt_nascimento_usuario: dt_nascimento_usuario, nm_cidade_usuario: nm_cidade_usuario, cd_telefone_usuario: cd_telefone_usuario, cd_ip_usuario: cd_ip_usuario, nm_endereco_usuario: nm_endereco_usuario, cd_numero_endereco_usuario: cd_numero_endereco_usuario, ds_complemento_endereco_usuario: ds_complemento_endereco_usuario, ds_foto_usuario: ds_foto_usuario
    };
}
exports.createUserByEmail = createUserByEmail;
