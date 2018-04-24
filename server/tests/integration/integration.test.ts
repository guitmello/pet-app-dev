import * as HTTPStatus from 'http-status';
import { app, request, expect } from './config/helpers';
import * as jwt from 'jwt-simple';
const model = require('../../server/models');

describe('Testes de Integração', () => {

  'use strict';
  const config = require('../../server/config/env/config')();
  const model = require('../../server/models');

  let id;
  let token;

  const userTest = {
    id: 100,
    nm_usuario: 'usuarioTEST',
    nm_email_usuario: 'emailteste@usuario.com',
    cd_senha_usuario: '1234',
    nm_tipo_usuario: 'pessoa fisica',
    cd_cnpj_usuario: 'nao se aplica',
    cd_cpf_usuario: '99999999999',
    nm_razao_social_usuario: 'teste',
    nm_sexo_usuario: 'm',
    cd_cep_usuario: 99999999,
    nm_estado_usuario: 'teste estado',
    dt_nascimento_usuario: 1991-10-10,
    nm_cidade_usuario: 'teste cidade',
    cd_telefone_usuario: 99999999,
    cd_ip_usuario: 9999999999,
    nm_endereco_usuario: 'teste endereco',
    cd_numero_endereco_usuario: 1,
    ds_complemento_endereco_usuario: 'casa 1',
    ds_foto_usuario: 'foto'
  };

  const userDefault = {
    id: 1,
    nm_usuario: 'usuarioDEFAULT',
    nm_email_usuario: 'emailteste@usuario.com',
    cd_senha_usuario: '1234',
    nm_tipo_usuario: 'pessoa fisica',
    cd_cnpj_usuario: 'nao se aplica',
    cd_cpf_usuario: '99999999999',
    nm_razao_social_usuario: 'teste',
    nm_sexo_usuario: 'm',
    cd_cep_usuario: 99999999,
    nm_estado_usuario: 'teste estado',
    dt_nascimento_usuario: 1991-10-10,
    nm_cidade_usuario: 'teste cidade',
    cd_telefone_usuario: 99999999,
    cd_ip_usuario: 9999999999,
    nm_endereco_usuario: 'teste endereco',
    cd_numero_endereco_usuario: 1,
    ds_complemento_endereco_usuario: 'casa 1',
    ds_foto_usuario: 'foto'
  };

  beforeEach((done) => {
    model.User.destroy({
      where: {}
    })
    .then(() => {
      return model.User.create(userDefault);
    })
    .then(user => {
      model.User.create(userTest)
      .then(() => {
        token = jwt.encode({ id: user.id }, config.secret)
        done();
      });
    });
  });

  describe('POST /token', () => {
    it('Deve receber um jwt', done => {
      const credentials = {
        email: userDefault.nm_email_usuario,
        password: userDefault.cd_senha_usuario
      };
      request(app)
      .post('/token')
      .send(credentials)
      .end((error, res) => {
        expect(res.status).to.equal(HTTPStatus.OK);
        expect(res.body.token).to.equal(`${token}`);
        done(error);
      });
    });

    it('Não deve gerar token', done => {
      const credentials = {
        email: 'email@emailteste.com',
        password: 'senha'
      };
      request(app)
      .post('token')
      .send(credentials)
      .end((error, res) => {
        expect(res.status).to.equal(httpStatus.UNAUTHORIZED);
        expect(res.body).to.empty;
        done(error);
      });
    });
  });


  describe('GET /api/users/all', () => {
    it('Deve retornar um Array com todos os Usuários', done => {
      request(app)
      .get('/api/users/all')
      .end((error, res) => {
        expect(res.status).to.equal(HTTPStatus.OK);
        expect(res.body.payload).to.be.an('array');
        expect(res.body.payload[0].nm_usuario).to.be.equal(userDefault.nm_usuario);
        expect(res.body.payload[0].nm_email_usuario).to.be.equal(userDefault.nm_email_usuario);
        expect(res.body.payload[0].cd_senha_usuario).to.be.equal(userDefault.cd_senha_usuario);
        expect(res.body.payload[0].nm_tipo_usuario).to.be.equal(userDefault.nm_tipo_usuario);
        expect(res.body.payload[0].cd_cnpj_usuario).to.be.equal(userDefault.cd_cnpj_usuario);
        expect(res.body.payload[0].cd_cpf_usuario).to.be.equal(userDefault.cd_cpf_usuario);
        expect(res.body.payload[0].nm_razao_social_usuario).to.be.equal(userDefault.nm_razao_social_usuario);
        expect(res.body.payload[0].nm_sexo_usuario).to.be.equal(userDefault.nm_sexo_usuario);
        expect(res.body.payload[0].cd_cep_usuario).to.be.equal(userDefault.cd_cep_usuario);
        expect(res.body.payload[0].nm_estado_usuario).to.be.equal(userDefault.nm_estado_usuario);
        expect(res.body.payload[0].dt_nascimento_usuario).to.be.equal(userDefault.dt_nascimento_usuario);
        expect(res.body.payload[0].nm_cidade_usuario).to.be.equal(userDefault.nm_cidade_usuario);
        expect(res.body.payload[0].cd_telefone_usuario).to.be.equal(userDefault.cd_telefone_usuario);
        expect(res.body.payload[0].nm_cidade_usuario).to.be.equal(userDefault.nm_cidade_usuario);
        expect(res.body.payload[0].cd_ip_usuario).to.be.equal(userDefault.cd_ip_usuario);
        expect(res.body.payload[0].nm_endereco_usuario).to.be.equal(userDefault.nm_endereco_usuario);
        expect(res.body.payload[0].cd_numero_endereco_usuario).to.be.equal(userDefault.cd_numero_endereco_usuario);
        expect(res.body.payload[0].ds_foto_usuario).to.be.equal(userDefault.ds_foto_usuario);
        done(error);
      });
    });
  });

  describe('GET /api/users/:id', () => {
    it('Deve retornar um json com apenas um Usuário', done => {
      request(app)
      .get(`/api/users/${userDefault.id}`)
      .end((error, res) => {
        expect(res.status).to.equal(HTTPStatus.OK);
        expect(res.body.payload.id).to.equal(userDefault.id);
        expect(res.body.payload).to.have.all.keys([
          'id', 'nm_usuario', 'nm_email_usuario','cd_senha_usuario','nm_tipo_usuario','cd_cnpj_usuario','cd_cpf_usuario','nm_razao_social_usuario','nm_sexo_usuario','cd_cep_usuario','nm_estado_usuario','dt_nascimento_usuario','nm_cidade_usuario','cd_telefone_usuario','cd_ip_usuario','nm_endereco_usuario','cd_numero_endereco_usuario','ds_complemento_endereco_usuario','ds_foto_usuario'
        ]);
        done(error);
      });
    });
  });

  describe('POST /api/users/create', () => {
    it('Deve criar um novo Usuário', done => {
      const user = {
        id: 5,
        nm_usuario: 'usuarioTESTE@',
        nm_email_usuario: 'emailteste@usuario.com',
        cd_senha_usuario: '1234',
        nm_tipo_usuario: 'pessoa fisica',
        cd_cnpj_usuario: 'nao se aplica',
        cd_cpf_usuario: '99999999999',
        nm_razao_social_usuario: 'teste',
        nm_sexo_usuario: 'm',
        cd_cep_usuario: 99999999,
        nm_estado_usuario: 'teste estado',
        dt_nascimento_usuario: 1991-10-10,
        nm_cidade_usuario: 'teste cidade',
        cd_telefone_usuario: 99999999,
        cd_ip_usuario: 9999999999,
        nm_endereco_usuario: 'teste endereco',
        cd_numero_endereco_usuario: 1,
        ds_complemento_endereco_usuario: 'casa 1',
        ds_foto_usuario: 'foto'
      }
      request(app)
      .post('/api/users/create')
      .send(user)
      .end((error, res) => {
        expect(res.status).to.equal(HTTPStatus.OK);
        expect(res.body.payload.id).to.eql(user.id);
        expect(res.body.payload.nm_usuario).to.eql(user.nm_usuario);
        expect(res.body.payload.nm_email_usuario).to.eql(user.nm_email_usuario);
        expect(res.body.payload.cd_senha_usuario).to.eql(user.cd_senha_usuario);
        expect(res.body.payload.nm_tipo_usuario).to.eql(user.nm_tipo_usuario);
        expect(res.body.payload.cd_cnpj_usuario).to.eql(user.cd_cnpj_usuario);
        expect(res.body.payload.cd_cpf_usuario).to.eql(user.cd_cpf_usuario);
        expect(res.body.payload.nm_razao_social_usuario).to.eql(user.nm_razao_social_usuario);
        expect(res.body.payload.nm_sexo_usuario).to.eql(user.nm_sexo_usuario);
        expect(res.body.payload.cd_cep_usuario).to.eql(user.cd_cep_usuario);
        expect(res.body.payload.nm_estado_usuario).to.eql(user.nm_estado_usuario);
        expect(res.body.payload.dt_nascimento_usuario).to.eql(user.dt_nascimento_usuario);
        expect(res.body.payload.nm_cidade_usuario).to.eql(user.nm_cidade_usuario);
        expect(res.body.payload.cd_telefone_usuario).to.eql(user.cd_telefone_usuario);
        expect(res.body.payload.nm_cidade_usuario).to.eql(user.nm_cidade_usuario);
        expect(res.body.payload.cd_ip_usuario).to.eql(user.cd_ip_usuario);
        expect(res.body.payload.nm_endereco_usuario).to.eql(user.nm_endereco_usuario);
        expect(res.body.payload.cd_numero_endereco_usuario).to.eql(user.cd_numero_endereco_usuario);
        expect(res.body.payload.ds_foto_usuario).to.eql(user.ds_foto_usuario);
        done(error);
      });
    });
  });

  describe('PUT /api/users/:id/update', () => {
    it('Deve atualizar um Usuário', done => {
      const user = {
        nm_usuario: 'Teste Update User',
        nm_email_usuario: 'email@testeupdate.com',
        cd_senha_usuario: '12345',
        nm_tipo_usuario: 'fisica',
        cd_cnpj_usuario: 0,
        cd_cpf_usuario: 88888888888,
        nm_razao_social_usuario: 'teste update',
        nm_sexo_usuario: 'M',
        cd_cep_usuario: 22222222,
        nm_estado_usuario: 'teste update estado',
        dt_nascimento_usuario: 1991-10-10,
        nm_cidade_usuario: 'teste cidade',
        cd_telefone_usuario: 88887777,
        cd_ip_usuario: 9999999999,
        nm_endereco_usuario: 'teste update',
        cd_numero_endereco_usuario: 3,
        ds_complemento_endereco_usuario: 'casa2',
        ds_foto_usuario: 'foto update'
      }
      request(app)
      .put(`/api/users/${userTest.id}/update`)
      .send(user)
      .end((error, res) => {
        expect(res.status).to.equal(HTTPStatus.OK);
        expect(res.body.payload[0]).to.eql(1);
        done(error);
      });
    });
  });

  describe('DELETE /api/users/:id/destroy', () => {
    it('Deve deletar um Usuário', done => {
      request(app)
      .delete(`/api/users/${userTest.id}/destroy`)
      .end((error, res) => {
        expect(res.status).to.equal(HTTPStatus.OK);
        expect(res.body.payload).to.eql(1);
        done(error);
      });
    });
  });
});
