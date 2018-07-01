const pool = require('./initdb');

const getBoards = (callback) => {
    const query = 'SELECT name FROM boards';
    pool.query(query, null, (err, result) => {
        callback(err, result.rows);
    });
}

module.exports = {
    getBoards: getBoards
}