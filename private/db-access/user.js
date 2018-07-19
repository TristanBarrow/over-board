const pool = require('./initdb.js'); 
const passwordHash = require('password-hash');

const getUser = (userid, callback) => {
    const query = 'SELECT username FROM users WHERE id = $1';
    pool.query(query, [userid], (err, result) => {
        callback(err, result.rows[0].username);
    });
}

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
        if (result.rowCount == 0) {
            callback(true, 'password Does not Exist')
        } else {
            callback(err, passwordHash.verify(password, result.rows[0].password));
        }
        
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

const getAll = (callback) => {
    const query = 'SELECT username FROM users';
    pool.query(query, (err, result) => {
        callback(err, result.rows);
    });
}

module.exports = {
    checkUsername: checkUsername,
    createUser: createUser,
    verifyPassword: verifyPassword,
    changePassword: changePassword,
    deleteUser: deleteUser,
    getUser: getUser,
    getAll: getAll
}