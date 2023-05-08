const express = require("express");
const router = express.Router();
const { upload, uploadImage } = require("../../controller/uploadController");

router.post("/", upload.single("uploadImg"), uploadImage);

module.exports = router;
