const { Pool } = require("pg");
const pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'admin123',
    password: 'Sree@123',
    database: "postgresdb123"
});

module.exports = pool;