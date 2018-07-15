const pool = require('./initdb.js'); 
const passwordHash = require('password-hash');

const checkUsername = (username, callback) => {
    const query = 'SELECT username FROM users WHERE username = $1';
    pool.query(query, [username], (err, result) => {
        if (err) {
            callback(err, err);
        } else {
            callback(err, (result.rowCount != 0));
        }
    });
}

const createUser = (username, password, callback) => {
    const query = 'INSERT INTO users(username, password) VALUES ($1, $2);';
    const hashedPassword = passwordHash.generate(password);

    pool.query(query, [username, hashedPassword], (err, result) => {
        callback(err, result);
    });
}

const verifyPassword = (username, password, callback) => {
    const query = 'SELECT password AS password FROM users WHERE username = $1';
    pool.query(query, [username], (err, result) => {
        callback(err, passwordHash.verify(password, result.rows[0].password));
    });
}

const deleteUser = (username, callback) => {
    const query = 'DELETE FROM users WHERE username = $1';
    pool.query(query, [username], (err, result) => {
        callback(err, result);
    });
}

const changePassword = (username, password, callback) => {
    const query = 'UPDATE users SET password = $2 WHERE username = $1';
    const hashedPassword = passwordHash.generate(password);
    pool.query(query, [username, hashedPassword], (err, response) => {
        callback(err, response);
    });
}

module.exports = {
    checkUsername: checkUsername,
    createUser: createUser,
    verifyPassword: verifyPassword,
    changePassword: changePassword,
    deleteUser: deleteUser
}