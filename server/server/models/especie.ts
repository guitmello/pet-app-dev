export default function (sequelize, DataTypes) {

  const Especie = sequelize.define('Especie', {
    nm_especie: {
      type: DataTypes.STRING,
    },
    cd_especie_pk: {
      type: DataTypes.UUID,
      //autoIncrement: true,
      primarykey: true
    }
  });

  return Especie;
}
