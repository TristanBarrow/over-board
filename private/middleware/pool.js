require('dotenv').config();
const { Pool } = require('pg');

module.exports = (req, res, next) => {
    req.pool = new Pool({
        connectionString: process.env.DATABASE_URL
    });
    next();
}
