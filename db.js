const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "raegabriel",
  //password: "postgrespass",
  port: 5432,
});

module.exports = pool;
