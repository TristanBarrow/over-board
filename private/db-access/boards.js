const pool = require('./initdb');

const getBoards = (callback) => {
    const query = 'SELECT name FROM boards';
    pool.query(query, null, (err, result) => {
        
        console.log(result.rows);
        callback(err, result.rows);
    });
}

const getTricks = (board, callback) => {
    console.log(board);
    const query = 'SELECT * FROM tricks WHERE board = (SELECT id FROM boards WHERE name = $1);';
    pool.query(query, [board], (err, result) => {
        callback(err, result.rows);
    });
}

module.exports = {
    getBoards: getBoards,
    getTricks: getTricks
}