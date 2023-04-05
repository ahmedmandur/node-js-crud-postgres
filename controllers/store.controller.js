var storeModel = require("../models/store.model");
var storeQueries = require("../db/queries/store.queries");
var dbConnection = require("../db/connection");
var helpers = require("../utils/helpers");

exports.getAllStores = (req, res) => {
  dbConnection.dbQuery(storeQueries.queries.GET_LIST, (err, result) => {
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

  dbConnection.dbQuery(storeQueries.queries.ADD, values, (err, result) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while adding store.",
      });
    } else {
      res.send(result);
    }
  });

  return res.status(201).send("Store created successfully");
};

exports.getById = async (req, res) => {
  var result = await dbConnection.dbQuery(storeQueries.queries.GET_BY_ID, [
    req.params.id,
  ]);
  return res.status(200).send(result.rows);
};

exports.updateStore = (req, res) => {
  values = [req.body.name, req.body.address, req.params.id];
  dbConnection.dbQuery(storeQueries.queries.UPDATE, values, (err, result) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while updating store.",
      });
    } else {
      res.send(result.rows);
    }
  });

  return res.status(200).send("Store updated successfully");
};

exports.deleteStore = (req, res) => {
  dbConnection.dbQuery(
    storeQueries.queries.DELETE,
    [req.params.id],
    (err, result) => {
      if (err) {
        res.status(500).send({
          message: err.message || "Some error occurred while deleting stores.",
        });
      } else {
        res.send(result);
      }
    }
  );
};
