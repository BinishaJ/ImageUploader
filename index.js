const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const rootRoute = require("./routes/root");
const uploadRoute = require("./routes/api/uploadRoute");

const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "/public")));

app.use("/", rootRoute);
app.use("/upload", uploadRoute);

app.all("*", (req, res) => {
  res.status(404).send("Error 404! Not Found");
});

app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});
