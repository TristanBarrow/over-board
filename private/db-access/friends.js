const pool = require('./initdb.js');

// GET     /friends/:id                 # Gets a users friends
const getFriends = (me, callback) => {
    const query = 'SELECT username FROM users WHERE id = (SELECT following FROM users_followers WHERE me = (SELECT ID FROM users WHERE username = $1));';
    pool.query(query, [me], (err, result) => {
        callback(err, result);
    });
}

// POST    /friends/:id + body          # adds a friend
const addFriend = (me, friend, callback) => {
    
}

// DELETE  /friends/:id                 # Deletes a friend
const deleteFriend = (me, friend, callback) => {
    
}

module.exports = {
    getFriends: getFriends,
    addFriend: addFriend,
    deleteFriend: deleteFriend
}