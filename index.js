const express = require("express");
const app = express();
require("dotenv").config();
const rootRoute = require("./routes/root");
const uploadRoute = require("./routes/api/uploadRoute");
const imageRoute = require("./routes/api/imageRoute");
const images = require("./routes/images");

const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: false }));

app.use("/", rootRoute);
app.use("/upload", uploadRoute);
app.use("/uploads", express.static("uploads"));
app.use("/imagelist", imageRoute);
app.use("/images", images);

app.all("*", (req, res) => {
  res.status(404).send("Error 404! Not Found");
});

app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});
