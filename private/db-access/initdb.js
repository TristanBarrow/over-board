const { Pool, Client } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.query('SELECT * FROM users', (err, res) => {
    if (!!err) {
        throw err;
    }
    for (let row of res.rows) {
        console.log(JSON.stringify(row));
    }
    client.end();
});

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

client.connect();

client.query();