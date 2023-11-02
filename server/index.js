const express = require("express");
const Genres = require("./src/models/geners");
const fs = require("fs");
const csv = require("csv-parser");
const sequelize = require("./db/config");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

Genres.sync({ force: true }).then(() => {
  console.log("Genres table synced.");
});

app.post("/import", (req, res) => {
  const results = [];

  fs.createReadStream("../data/library_genres_202310271631.csv") // Replace 'genres.csv' with your CSV file name
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      sequelize.transaction((t) => {
        return Genres.bulkCreate(results, { transaction: t })
          .then(() => {
            res.send("Data imported successfully");
          })
          .catch((error) => {
            res.status(500).send(`Error importing data: ${error.message}`);
          });
      });
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
