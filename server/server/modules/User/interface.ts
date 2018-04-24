export interface IUser {
  readonly id: number,
  nm_usuario: string,
  nm_email_usuario: string,
  cd_senha_usuario: string,
  nm_tipo_usuario: string,
  cd_cnpj_usuario: number,
  cd_cpf_usuario: number,
  nm_razao_social_usuario: string,
  nm_sexo_usuario: string,
  cd_cep_usuario: number,
  nm_estado_usuario: string,
  dt_nascimento_usuario: Date,
  nm_cidade_usuario: string,
  cd_telefone_usuario: number,
  cd_ip_usuario: string,
  nm_endereco_usuario: string,
  cd_numero_endereco_usuario: number,
  ds_complemento_endereco_usuario: string,
  ds_foto_usuario: string
}

export interface IUserDetail extends IUser{
  id: number,
  nm_usuario: string,
  nm_email_usuario: string,
  cd_senha_usuario: string,
  nm_tipo_usuario: string,
  cd_cnpj_usuario: number,
  cd_cpf_usuario: number,
  nm_razao_social_usuario: string,
  nm_sexo_usuario: string,
  cd_cep_usuario: number,
  nm_estado_usuario: string,
  dt_nascimento_usuario: Date,
  nm_cidade_usuario: string,
  cd_telefone_usuario: number,
  cd_ip_usuario: string,
  nm_endereco_usuario: string,
  cd_numero_endereco_usuario: number,
  ds_complemento_endereco_usuario: string,
  ds_foto_usuario: string
}

export function create({ id, nm_tipo_usuario, cd_cnpj_usuario, cd_cpf_usuario, nm_razao_social_usuario, nm_usuario, nm_email_usuario, nm_sexo_usuario, cd_senha_usuario, cd_cep_usuario, nm_estado_usuario, dt_nascimento_usuario, nm_cidade_usuario, cd_telefone_usuario, cd_ip_usuario, nm_endereco_usuario, cd_numero_endereco_usuario, ds_complemento_endereco_usuario, ds_foto_usuario }: any): IUser {
    return {
      id, nm_tipo_usuario, cd_cnpj_usuario, cd_cpf_usuario, nm_razao_social_usuario, nm_usuario, nm_email_usuario, nm_sexo_usuario, cd_senha_usuario, cd_cep_usuario, nm_estado_usuario, dt_nascimento_usuario, nm_cidade_usuario, cd_telefone_usuario, cd_ip_usuario, nm_endereco_usuario, cd_numero_endereco_usuario, ds_complemento_endereco_usuario, ds_foto_usuario
    }
}

export function createUsers(data: any[]): IUser[]{
  return data.map(create)
}

export function createUserById({ id, nm_tipo_usuario, cd_cnpj_usuario, cd_cpf_usuario, nm_razao_social_usuario, nm_usuario, nm_email_usuario, nm_sexo_usuario, cd_senha_usuario, cd_cep_usuario, nm_estado_usuario, dt_nascimento_usuario, nm_cidade_usuario, cd_telefone_usuario, cd_ip_usuario, nm_endereco_usuario, cd_numero_endereco_usuario, ds_complemento_endereco_usuario, ds_foto_usuario }: any): IUserDetail {
    return {
      id, nm_tipo_usuario, cd_cnpj_usuario, cd_cpf_usuario, nm_razao_social_usuario, nm_usuario, nm_email_usuario, nm_sexo_usuario, cd_senha_usuario, cd_cep_usuario, nm_estado_usuario, dt_nascimento_usuario, nm_cidade_usuario, cd_telefone_usuario, cd_ip_usuario, nm_endereco_usuario, cd_numero_endereco_usuario, ds_complemento_endereco_usuario, ds_foto_usuario
    }
}

export function createUserByEmail({ id, nm_tipo_usuario, cd_cnpj_usuario, cd_cpf_usuario, nm_razao_social_usuario, nm_usuario, nm_email_usuario, nm_sexo_usuario, cd_senha_usuario, cd_cep_usuario, nm_estado_usuario, dt_nascimento_usuario, nm_cidade_usuario, cd_telefone_usuario, cd_ip_usuario, nm_endereco_usuario, cd_numero_endereco_usuario, ds_complemento_endereco_usuario, ds_foto_usuario }: any): IUserDetail{
  return {
    id, nm_tipo_usuario, cd_cnpj_usuario, cd_cpf_usuario, nm_razao_social_usuario, nm_usuario, nm_email_usuario, nm_sexo_usuario, cd_senha_usuario, cd_cep_usuario, nm_estado_usuario, dt_nascimento_usuario, nm_cidade_usuario, cd_telefone_usuario, cd_ip_usuario, nm_endereco_usuario, cd_numero_endereco_usuario, ds_complemento_endereco_usuario, ds_foto_usuario
  }
}
