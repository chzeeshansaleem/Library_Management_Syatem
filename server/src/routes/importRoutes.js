const express = require("express");
const {
  importGenresData,
  importPublishersData,
} = require("../controllers/controllers");
const router = express.Router();

router.post("/import", importGenresData);
router.post("/publish", importPublishersData);
module.exports = router;
