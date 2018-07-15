const pool = require('./initdb.js');

// GET     /following/:username               # Gets a users followers
const getFollowers = (me, callback) => {
    const query = 'SELECT following FROM users_followers WHERE me = (SELECT ID FROM users WHERE username = $1);';
    pool.query(query, [me], (err, result) => {
        console.log(result)
        callback(err, result);
    });
}

// POST    /following + body        # adds a friend
const addFollower = (me, follower, callback) => {
    const query = 'INSERT INTO users_followers(me, following) VALUES ((SELECT id FROM users WHERE username = $1), (SELECT id FROM users WHERE username = $2))';
    pool.query(query, [me, follower], (err, result) => {
        callback(err, result);
    });
}

// DELETE  /following               # Deletes a friend
const deleteFollower = (me, follower, callback) => {
    const query = 'DELETE FROM users_followers WHERE me = (SELECT id FROM users WHERE username = $1) AND following = (SELECT id FROM users WHERE username = $2)';
    pool.query(query, [me, follower], (err, result) => {
        callback(err, result);
    });
}

module.exports = {
    getFollowers: getFollowers,
    addFollower: addFollower,
    deleteFollower: deleteFollower
}