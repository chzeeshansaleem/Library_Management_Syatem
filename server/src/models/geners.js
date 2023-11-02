const { DataTypes } = require("sequelize");
const sequelize = require("../../db/config");
const Genres = sequelize.define(
  "Genres",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Genres",
    timestamps: false,
  }
);

// `sequelize.define` also returns the model
console.log(Genres === sequelize.models.Genres); // true
module.exports = Genres;
