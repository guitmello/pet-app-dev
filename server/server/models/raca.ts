export default function (sequelize, DataTypes) {

  const Raca = sequelize.define('Raca', {
    nm_raca: {
      type: DataTypes.STRING,
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  });

  return Raca;
}
