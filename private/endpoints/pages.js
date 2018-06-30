// require('dotenv').config();

const { Client } = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl:true
});

const redirect = (req, res) => {

    client.query('SELECT * FROM users', (err, queryRes) => {
        if (!!err) {
            throw err;
        }
        for (let row of queryRes.rows) {
            console.log(JSON.stringify(row));
            res.json(row);
        }
        client.end();
    });

    client.connect();
}

const login = (req, res) => {
    res.send('Login page');
}

const createAccount = (req, res) => {
    res.send('Create Account pag')
}

const home = (req, res) => {
    res.send('Home Page');
}

module.exports = {
    redirect: redirect,
    login: login,
    createAccount: createAccount,
    home: home
}