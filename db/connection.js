var pool = require("./pool");

exports.query = (queryText, queryValue) => {
  return new Promise((resolve, reject) => {
    pool.query(queryText, queryValue, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};
