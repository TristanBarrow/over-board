const pool = require('./initdb');

const getBoards = (callback) => {
    const query = 'SELECT name FROM boards';
    pool.query(query, null, (err, result) => {
        callback(err, result.rows);
    });
}

const getTricks = (trick, callback) => {
    console.log(trick);
    const query = 'SELECT name FROM tricks WHERE board = (SELECT id FROM boards WHERE name = $1)';
    pool.query(query, [trick], (err, result) => {
        callback(err, result.rows);
    });
}

module.exports = {
    getBoards: getBoards,
    getTricks: getTricks
}