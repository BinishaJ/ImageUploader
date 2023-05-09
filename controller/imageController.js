const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "..", "uploads");

const displayImages = (req, res) => {
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    const imageUrls = files.map((file) => `/uploads/${file}`);
    res.status(200).json(imageUrls);
  });
};

module.exports = { displayImages };
