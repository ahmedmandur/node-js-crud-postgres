var events = require("events");
var audit = require("../models/audit.model");
var auditQueries = require("../db/queries/audit.queries");
var dbConnection = require("../db/connection");

var emitter = new events.EventEmitter();

const auditEvent = "audit";
emitter.on(auditEvent, function (audit) {
  try {
    values = [
      audit.auditAction,
      audit.data == null ? null : JSON.stringify(audit.data),
      audit.auditBy,
      audit.auditOn,
      audit.status,
      audit.error,
    ];
    var auditQuery = auditQueries.queries.ADD;

    dbConnection.dbQuery(auditQuery, values);
  } catch (error) {
    console.log("Audit Event Emitter - error : " + error);
  }
});

exports.prepareAudit = function (auditAction, data, error, auditBy, auditOn) {
  let status = 200;
  if (error) status = 500;

  var auditObj = new audit.Audit(
    auditAction,
    data,
    status,
    error,
    auditBy,
    auditOn
  );
  emitter.emit(auditEvent, auditObj);
};
