const multer = require("multer");

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
  if (!req.file)
    return res.status(400).send(`No file Uploaded <br>
    <button onclick="window.location.href='/images'">Show Images</button>
    <button onclick="window.location.href='/'">Back to Home</button>
    `);
  console.log(req.file);
  res.send(
    `Uploaded <br>
    <button onclick="window.location.href='/images'">Show Images</button>
    <button onclick="window.location.href='/'">Back to Home</button>
    `
  );
};

module.exports = { upload, uploadImage };
