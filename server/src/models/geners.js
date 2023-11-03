module.exports = (sequelize, DataTypes) => {
  const Genres = sequelize.define(
    "Genres",
    {
      // Model attributes are defined here
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: "Genres",
      timestamps: false,
    }
  );
  return Genres;
};
