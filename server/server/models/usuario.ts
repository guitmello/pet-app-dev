export default function (sequelize, DataTypes) {

  const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nm_tipo_usuario: {
      type: DataTypes.STRING
    },
    cd_cnpj_usuario: {
      type: DataTypes.BIGINT
    },
    cd_cpf_usuario: {
      type: DataTypes.BIGINT
    },
    nm_razao_social_usuario: {
      type: DataTypes.STRING
    },
    nm_usuario: {
      type: DataTypes.STRING
    },
    nm_email_usuario: {
      type: DataTypes.STRING
    },
    nm_sexo_usuario: {
      type: DataTypes.CHAR
    },
    cd_senha_usuario: {
      type: DataTypes.STRING
    },
    cd_cep_usuario: {
      type: DataTypes.INTEGER
    },
    nm_estado_usuario: {
      type: DataTypes.STRING
    },
    dt_nascimento_usuario: {
      type: DataTypes.DATEONLY
    },
    nm_cidade_usuario: {
      type: DataTypes.STRING
    },
    cd_telefone_usuario: {
      type: DataTypes.BIGINT
    },
    cd_ip_usuario: {
      type: DataTypes.UUID,
      unique: true
    },
    nm_endereco_usuario: {
      type: DataTypes.STRING
    },
    cd_numero_endereco_usuario: {
      type: DataTypes.INTEGER
    },
    ds_complemento_endereco_usuario: {
      type: DataTypes.STRING
    },
    ds_foto_usuario: {
      type: DataTypes.STRING
    }
  });

  return Usuario;
}
