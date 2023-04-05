exports.queries = {
  GET_LIST: "SELECT id, name, code, address FROM bms.stores;",
  ADD: "INSERT INTO bms.stores (name, code, created_on, created_by, address) VALUES($1, $2, $3, $4, $5);",
  GET_BY_ID: "SELECT * FROM bms.stores WHERE id = $1 LIMIT 1;",
  UPDATE: "UPDATE bms.stores SET name = $1, address = $2 WHERE id = $3;",
  DELETE: "DELETE FROM bms.stores WHERE id = $1;",
};
