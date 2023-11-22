// const { Client } = require("pg");
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  database: "events",
  password: "postgres",
  port: 5432,
});

module.exports = {
  pool,
};
