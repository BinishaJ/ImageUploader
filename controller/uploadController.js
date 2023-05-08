const multer = require("multer");
// const Image = require("../models/Image");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const uploadImage = (req, res, next) => {
  console.log(req.file);
  res.send("Uploaded");
  // res.redirect("/");
};

module.exports = { upload, uploadImage };
