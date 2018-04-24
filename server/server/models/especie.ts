export default function (sequelize, DataTypes) {

  const Especie = sequelize.define('Especie', {
    nm_especie: {
      type: DataTypes.STRING,
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  });

  return Especie;
}
