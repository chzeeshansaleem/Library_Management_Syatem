const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  const Publishers = sequelize.define(
    "Publishers",
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Set the default value using DataTypes
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre_speciality: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "Genres",
          key: "name",
        },
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
      },
      founded_date: {
        type: DataTypes.DATE,
      },
      city: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "Publishers",
      timestamps: false,
    }
  );

  Publishers.belongsTo(sequelize.models.Genres, {
    foreignKey: "genre_speciality",
  });

  return Publishers;
};
