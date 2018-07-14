const db = require('../db-access/friends.js');

// GET     /friends/:username                 # Gets a users friends
const getFriends = (req, res) => {
    db.getFriends(req.query, (err, response) => {
        if (err) {
            res.json(false);
        }
        res.json(response);
    });
}

// POST    /friends/:username + body          # adds a friend
const addFriend = (req, res) => {
    db.getFriends(req.query, (err, response) => {
        if (err) {
            res.json({ success: false });
        }
        res.json(response);
    });
}

// DELETE  /friends/:username + body          # Deletes a friend
const deleteFriend = (req, res) => {
    
}

module.exports = {
    getFriends: getFriends,
    addFriend: addFriend,
    deleteFriend: deleteFriend
}