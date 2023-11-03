module.exports = (sequelize, DataTypes) => {
  const Authors = sequelize.define(
    "Authors",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birth_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "Publishers",
          key: "country",
        },
      },
      biography: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: "Authors",
      timestamps: false,
    }
  );
  return Authors;
};
