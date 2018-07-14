const pool = require('./initdb.js');

const getTricks = (username, callback) => {
    const query = 'SELECT t.name AS trick, p.proficiency_title AS prof_title, p.proficiency_notes AS prof_notes, ut.notes AS notes FROM users_tricks ut INNER JOIN users u ON u.id = ut.username INNER JOIN tricks t ON t.id = ut.trick INNER JOIN proficiencies p ON ut.proficiency = p.id WHERE u.username = $1';
    pool.query(query, [username], (err, result) => {
        callback(err, result.rows);
    });
}

// const trick = { 
//     username: 'id', 
//     trick: 'id', 
//     profciancy: 'id', 
//     notes: 'text'
// }

const addTrick = (trick, callback) => {
    const query = '';
    pool.query(query, [username], (err, result) => {
        callback(result);
    });
}

const deleteTrick = (trick, callback) => {
    const query = '';
    pool.query(query, [username], (err, result) => {
        callback(result);
    });
}

module.exports = {
    getTricks: getTricks,
    addTrick: addTrick,
    deleteTrick: deleteTrick
}