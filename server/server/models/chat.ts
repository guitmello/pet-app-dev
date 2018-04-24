export default function (sequelize, DataTypes) {

  const Chat = sequelize.define('Chat', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    cd_usuario_enviou_fk: {
      type: DataTypes.INTEGER
    },
    cd_usuario_recebeu_fk: {
      type: DataTypes.INTEGER
    },
    cd_ip_usuario_enviou_fk: {
      type: DataTypes.INTEGER
    },
    cd_ip_usuario_recebeu_fk: {
      type: DataTypes.INTEGER
    }
  });

  return Chat;
}
