export default function (sequelize, DataTypes) {

  const Mensagem = sequelize.define('Mensagem', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
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
