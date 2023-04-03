const { Pool } = require("pg");
const dotenv = require("dotenv").config();

const db_config = {
  connectionTimeoutMillis: 300,
  idleTimeoutMillis: 200,
  max: 20,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
};

const pool = new Pool(db_config);

pool.on("connect", (client) => {
  console.log("database is connected");
});

pool.on("remove", (client) => {
  console.log("database connection removed");
});

module.exports = pool;
