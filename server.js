const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const bodyParser = require("body-parser");
const storeRoutes = require("./routes/store.routes");
const bookRoutes = require("./routes/book.routes");

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/", storeRoutes);
app.use("/api/v1/", bookRoutes);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { explorer: true })
);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
