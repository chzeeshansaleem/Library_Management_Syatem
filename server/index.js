const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
require("./db/config");
const importRoutes = require("./src/routes/importRoutes");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api", importRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
