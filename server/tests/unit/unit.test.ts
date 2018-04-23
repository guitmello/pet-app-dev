import { testDouble, expect } from './config/helpers';
import User from '../../server/modules/User/service';
const model = require('../../server/models');

describe('Testes Unitários do Controller', () => {
  describe('Método Create', () => {
    it('Deve criar um novo Usuario', () => {
      return User.create({
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
        dt_nascimento_usuario: 1991-10-10,
        nm_cidade_usuario: 'teste cidade',
        cd_telefone_usuario: 99999999,
        cd_ip_usuario: 9999999999,
        nm_endereco_usuario: 'teste endereco',
        cd_numero_endereco_usuario: 1,
        ds_complemento_endereco_usuario: 'casa 1',
        ds_foto_usuario: 'foto'
      })
      .then(data => {
        expect(data.dataValues).to.have.all.keys(
          ['nm_tipo_usuario','cd_cnpj_usuario','cd_cpf_usuario','nm_razao_social_usuario','nm_usuario','nm_email_usuario','nm_sexo_usuario','cd_senha_usuario','cd_cep_usuario','nm_estado_usuario','dt_nascimento_usuario','nm_cidade_usuario','cd_telefone_usuario','cd_ip_usuario','nm_endereco_usuario','cd_numero_endereco_usuario','ds_complemento_endereco_usuario','ds_foto_usuario']
        )
      });
    });
  });

  describe('Método Update', () => {
    it('Deve atualizar um Usuário', () => {
      const usuarioAtualizado = {
        nm_usuario: 'Nome atualizado'
      }
      return User.update(1, usuarioAtualizado).then(data => {
        expect(data[0]).to.be.equal(1);
      })
    });
  });

  describe('Método GET Users', () => {
    it('Deve retornar uma lista com todos os Usuários', () => {
      return User.getAll().then(data => {
        expect(data).to.be.an('array');
        expect(data[0]).to.have.all.keys(
          ['nm_tipo_usuario','cd_cnpj_usuario','cd_cpf_usuario','nm_razao_social_usuario','nm_usuario','nm_email_usuario','nm_sexo_usuario','cd_senha_usuario','cd_cep_usuario','nm_estado_usuario','dt_nascimento_usuario','nm_cidade_usuario','cd_telefone_usuario','cd_ip_usuario','nm_endereco_usuario','cd_numero_endereco_usuario','ds_complemento_endereco_usuario','ds_foto_usuario']
        )
      });
    });
  });

  describe('Método GetById', () => {
    it('Retornar um usuário de acordo com o ID passado', () => {
      return User.getById(1).then(data => {
        expect(data).to.have.all.keys(
          ['nm_tipo_usuario','cd_cnpj_usuario','cd_cpf_usuario','nm_razao_social_usuario','nm_usuario','nm_email_usuario','nm_sexo_usuario','cd_senha_usuario','cd_cep_usuario','nm_estado_usuario','dt_nascimento_usuario','nm_cidade_usuario','cd_telefone_usuario','cd_ip_usuario','nm_endereco_usuario','cd_numero_endereco_usuario','ds_complemento_endereco_usuario','ds_foto_usuario']
        )
      });
    });
  });

  describe('Método GetByEmail', () => {
    it('Retornar um usuário de acordo com o email passado', () => {
      return User.getByEmail(User.nm_email_usuario).then(data => {
        expect(data).to.have.all.keys(
          ['nm_tipo_usuario','cd_cnpj_usuario','cd_cpf_usuario','nm_razao_social_usuario','nm_usuario','nm_email_usuario','nm_sexo_usuario','cd_senha_usuario','cd_cep_usuario','nm_estado_usuario','dt_nascimento_usuario','nm_cidade_usuario','cd_telefone_usuario','cd_ip_usuario','nm_endereco_usuario','cd_numero_endereco_usuario','ds_complemento_endereco_usuario','ds_foto_usuario']
        )
      });
    });
  });

  describe('Método Delete', () => {
    it('Deve deletar um Usuário', () => {
      return User.delete(1).then(data => {
        expect(data).to.be.equal(1);
      })
    });
  });
});
