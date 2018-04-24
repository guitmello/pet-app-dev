export default function (sequelize, DataTypes) {

  const Raca = sequelize.define('Raca', {
    nm_raca: {
      type: DataTypes.STRING,
    },
    cd_raca_pk: {
      type: DataTypes.UUID,
      //autoIncrement: true,
      primarykey: true
    }
  });

  return Raca;
}
