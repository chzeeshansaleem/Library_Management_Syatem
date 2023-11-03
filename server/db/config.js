const { Sequelize, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const sequelize = new Sequelize("library", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
});
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.geners = require("../src/models/geners")(sequelize, DataTypes);
db.publishers = require("../src/models/publishers")(sequelize, DataTypes);
//db.authors = require("../src/models/authors")(sequelize, DataTypes);
db.sequelize.sync({ alter: true });
module.exports = db;
