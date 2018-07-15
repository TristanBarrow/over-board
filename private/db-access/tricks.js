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
    const query = 'INSERT INTO users_tricks(username, trick, proficiency, notes) VALUES((SELECT id FROM users WHERE username = $1), $2, $3, $4);';
    const queryValues = [trick.username, trick.trick, trick.proficiency, trick.notes];
    pool.query(query, queryValues, (err, result) => {
        callback(err, result);
    });
}

const deleteTrick = (username, trickid, callback) => {
    const query = 'DELETE FROM users_tricks WHERE username = (SELECT id FROM users WHERE username = $1) AND trick = $2;';
    pool.query(query, [username, trickid], (err, result) => {
        callback(err, result);
    });
}

const getProficiencies = (callback) => {
    const query = 'SELECT id AS id, proficiency_title AS proficiency, proficiency_notes AS description FROM proficiencies';
    pool.query(query, (err, result) => {
        callback(err, result.rows);
    });
}

module.exports = {
    getTricks: getTricks,
    addTrick: addTrick,
    deleteTrick: deleteTrick,
    getProficiencies: getProficiencies
}