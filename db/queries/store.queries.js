exports.queries = {
  GET_STORES_LIST: "SELECT id, name, code FROM bms.stores;",
  ADD_STORE:
    "INSERT INTO bms.stores (name, code, created_on, created_by, address) VALUES($1, $2, $3, $4, $5);",
};
