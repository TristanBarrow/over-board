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
    const query = 'select * from tricks where board = (select id from boards where name = $1);';
    pool.query(query, [board], (err, result) => {
        callback(err, result.rows);
    });
}

module.exports = {
    getBoards: getBoards,
    getTricks: getTricks
}