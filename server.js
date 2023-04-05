var express = require("express");
var cors = require("cors");
const dotenv = require("dotenv").config();

var bodyParser = require("body-parser");
var storeRoutes = require("./routes/store.routes");
var bookRoutes = require("./routes/book.routes");

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/", storeRoutes);
app.use("/api/v1/", bookRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
