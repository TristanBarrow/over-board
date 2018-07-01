require('dotenv').config();

const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

const redirect = (req, res) => {

    pool.query('SELECT * FROM users', null, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.json(result.rows);
    });

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