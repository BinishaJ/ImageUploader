const express = require("express");
const router = express.Router();
const { displayImages } = require("../../controller/imageController");

router.get("/", displayImages);

module.exports = router;
