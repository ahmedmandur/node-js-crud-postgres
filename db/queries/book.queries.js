exports.queries = {
  GET_LIST:
    "SELECT id, title, description, author, publisher, pages, store_code FROM bms.books;",
  ADD: "INSERT INTO bms.books (title, description, author, publisher, pages, store_code, created_on, created_by) VALUES($1, $2, $3, $4, $5, $6, $7, $8);",
  GET_BY_ID: "SELECT * FROM bms.books WHERE id = $1 LIMIT 1;",
  UPDATE: "UPDATE bms.books SET title = $1, description = $2 WHERE id = $3;",
  DELETE: "DELETE FROM bms.books WHERE id = $1;",
};
