var bookQueries = require("../db/queries/book.queries");
var dbConnection = require("../db/connection");
var Logger = require("../services/logger.service");
var audit = require("../services/audit.service");
var helpers = require("../utils/helpers");

const { AuditActions } = require("../constants/auditActions");

const logger = new Logger("book.controller");

exports.getAllBooks = async (req, res) => {
  var result = await dbConnection.dbQuery(bookQueries.queries.GET_LIST);
  await logger.info("getAllBooks", result.rows);
  audit.prepareAudit(
    AuditActions.GET_BOOK_LIST,
    result.rows,
    null,
    "POSTMAN",
    helpers.formattedDate()
  );
  return res.status(200).send(result.rows);
};

exports.saveBook = async (req, res) => {
  if (!req.body.title || !req.body.store_code) {
    return res.status(400).send("Please provide all required fields");
  }
  var createdBy = "admin";
  var createdOn = new Date();

  dbValues = [
    req.body.title,
    req.body.description,
    req.body.author,
    req.body.publisher,
    req.body.pages,
    req.body.store_code,
    createdOn,
    createdBy,
  ];
  audit.prepareAudit(
    AuditActions.SAVE_BOOK,
    null,
    null,
    "POSTMAN",
    helpers.formattedDate()
  );
  await dbConnection.dbQuery(bookQueries.queries.ADD, dbValues);
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

  dbValues = [req.body.title, req.body.description, req.params.id];

  audit.prepareAudit(
    AuditActions.GET_BOOK_LIST,
    null,
    null,
    "POSTMAN",
    helpers.formattedDate()
  );

  await dbConnection.dbQuery(bookQueries.queries.UPDATE, dbValues);
  return res.status(200).send("Book updated successfully");
};

exports.deleteBook = async (req, res) => {
  var result = await getById(req.params.id);
  if (result.rows.length == 0) {
    return res.status(404).send("Book not found");
  }
  audit.prepareAudit(
    AuditActions.DELETE_BOOK,
    req.params.id,
    null,
    createdBy,
    createdOn
  );

  await dbConnection.dbQuery(bookQueries.queries.DELETE, [req.params.id]);
  return res.status(200).send("Book deleted successfully");
};

async function getById(id) {
  return await dbConnection.dbQuery(bookQueries.queries.GET_BY_ID, [id]);
}
