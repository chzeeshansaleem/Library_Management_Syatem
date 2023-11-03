const fs = require("fs");
const csv = require("csv-parser");
const { sequelize, geners, publishers } = require("../../db/config");
// Geners Tables Import Data
const importGenresData = (req, res) => {
  const results = [];
  fs.createReadStream(
    "E:/Library Management Systems/data/library_genres_202310271631.csv"
  )
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      sequelize.transaction((t) => {
        return geners
          .bulkCreate(results, { transaction: t })
          .then(() => {
            res.send("Data imported successfully");
          })
          .catch((error) => {
            res.status(500).send(`Error importing data: ${error.message}`);
          });
      });
    });
};
//  Publishers Tables Import data
const importPublishersData = (req, res) => {
  const results = [];
  fs.createReadStream(
    "E:/Library Management Systems/data/library_publishers_202310271631.csv"
  )
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      sequelize.transaction((t) => {
        return publishers
          .bulkCreate(results, {
            transaction: t,
            include: geners, // This includes association with Geners table
          })
          .then(() => {
            res.send("Data imported successfully");
          })
          .catch((error) => {
            res.status(500).send(`Error importing data: ${error.message}`);
          });
      });
    });
};
//  Authors Table import data

module.exports = { importGenresData, importPublishersData };
