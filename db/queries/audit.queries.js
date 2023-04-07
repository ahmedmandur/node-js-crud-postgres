exports.queries = {
  ADD: "INSERT INTO bms.app_audit (audit_action, audit_data, audit_by, audit_on, audit_status, audit_error)VALUES($1, $2, $3, $4, $5, $6);",
};
