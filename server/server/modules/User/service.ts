import { IUser, IUserDetail, create, createUsers, createUserById, createUserByEmail } from './interface';
import * as Bluebird from 'bluebird';
const model = require('../../models');

class User implements IUser {
  public cd_usuario_pk: number;
  public nm_usuario: string;
  public nm_email_usuario: string;
  public cd_senha_usuario: string;
  public nm_tipo_usuario: string;
  public cd_cnpj_usuario: number;
  public cd_cpf_usuario: number;
  public nm_razao_social_usuario: string;
  public nm_sexo_usuario: string;
  public cd_cep_usuario: number;
  public nm_estado_usuario: string;
  public dt_nascimento_usuario: Date;
  public nm_cidade_usuario: string;
  public cd_telefone_usuario: number;
  public cd_ip_usuario: string;
  public nm_endereco_usuario: string;
  public cd_numero_endereco_usuario: number;
  public ds_complemento_endereco_usuario: string;
  public ds_foto_usuario: string;

  constructor(){}

  create(user: any){
    return model.User.create(user);
  }

  getAll(): Bluebird<IUser[]>{
    return model.User.findAll({
      order: ['nm_usuario']
    })
    .then(createUsers);
  }

  getById(cd_usuario_pk: number): Bluebird<IUserDetail>{
    return model.User.findOne({
      where: { cd_usuario_pk }
    })
    .then(createUserById);
  }

  getByEmail(nm_email_usuario: string): Bluebird<IUserDetail>{
    return model.User.findOne({
      where: { nm_email_usuario }
    })
    .then(createUserByEmail);
  }

  update(cd_usuario_pk: number, user: any){
    return model.User.update(user, {
      where: { cd_usuario_pk },
      fields: ['nm_usuario', 'nm_email_usuario','cd_senha_usuario','nm_tipo_usuario','cd_cnpj_usuario','cd_cpf_usuario','nm_razao_social_usuario','nm_sexo_usuario','cd_cep_usuario','nm_estado_usuario','dt_nascimento_usuario','nm_cidade_usuario','cd_telefone_usuario','cd_ip_usuario','nm_endereco_usuario','cd_numero_endereco_usuario','ds_complemento_endereco_usuario','ds_foto_usuario'],
      hooks: true,
      individualHooks: true
    });
  }

  delete(cd_usuario_pk: number){
    return model.User.destroy({
      where: { cd_usuario_pk }
    });
  }
}

export default new User();