var bookQueries = require("../db/queries/book.queries");
var dbConnection = require("../db/connection");
var helpers = require("../utils/helpers");

exports.getAllBooks = async (req, res) => {
  var result = await dbConnection.dbQuery(bookQueries.queries.GET_LIST);
  return res.status(200).send(result.rows);
};

exports.saveBook = async (req, res) => {
  if (!req.body.title || !req.body.store_code) {
    return res.status(400).send("Please provide all required fields");
  }

  var createdBy = "admin";
  var createdOn = new Date();

  values = [
    req.body.title,
    req.body.description,
    req.body.author,
    req.body.publisher,
    req.body.pages,
    req.body.store_code,
    createdOn,
    createdBy,
  ];

  await dbConnection.dbQuery(bookQueries.queries.ADD, values);
  return res.status(201).send("Book created successfully");
};

exports.getById = async (req, res) => {
  var result = await getById(req.params.id);
  if (result.rows.length == 0) {
    return res.status(404).send("Book not found");
  }

  return res.status(200).send(result.rows[0]);
};

exports.updateBook = async (req, res) => {
  var result = await getById(req.params.id);
  if (result.rows.length == 0) {
    return res.status(404).send("Book not found");
  }

  values = [req.body.title, req.body.description, req.params.id];

  await dbConnection.dbQuery(bookQueries.queries.UPDATE, values);
  return res.status(200).send("Book updated successfully");
};

exports.deleteBook = async (req, res) => {
  var result = await getById(req.params.id);
  if (result.rows.length == 0) {
    return res.status(404).send("Book not found");
  }
  await dbConnection.dbQuery(bookQueries.queries.DELETE, [req.params.id]);
  return res.status(200).send("Book deleted successfully");
};

async function getById(id) {
  return await dbConnection.dbQuery(bookQueries.queries.GET_BY_ID, [id]);
}
