var storeModel = require("../models/store.model");
var storeQueries = require("../db/queries/store.queries");
var dbConnection = require("../db/connection");
var helpers = require("../utils/helpers");
exports.getAllStores = (req, res) => {
  dbConnection.query(storeQueries.queries.GET_STORES_LIST, (err, result) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving stores.",
      });
    } else {
      res.send(result.rows);
    }
  });
};

exports.saveStore = (req, res) => {
  if (!req.body.name || !req.body.address) {
    return res.status(400).send("Store name and address cannot be empty");
  }

  var createdBy = "admin";
  var createdOn = new Date();

  values = [
    req.body.name,
    helpers.randomString(),
    createdOn,
    createdBy,
    req.body.address,
  ];

  dbConnection.query(storeQueries.queries.ADD_STORE, values, (err, result) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving stores.",
      });
    } else {
      res.send(result);
    }
  });

  return res.status(201).send();
};
