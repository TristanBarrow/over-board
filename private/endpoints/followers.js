const db = require('../db-access/followers.js');

// GET     /friends/:username                 # Gets a users friends
const getFollowers = (req, res) => {
    db.getFriends(req.query, (err, response) => {
        if (err) {
            res.json(false);
        }
        res.json(response);
    });
}

// POST    /friends/:username + body          # adds a friend
const addFollower = (req, res) => {
    db.getFriends(req.query, (err, response) => {
        if (err) {
            res.json({ success: false });
        }
        res.json({success: true, log: response });
    });
}

// DELETE  /friends/:username + body          # Deletes a friend
const deleteFollower = (req, res) => {
    
}

module.exports = {
    getFollowers: getFollowers,
    addFollower: addFollower,
    deleteFollower: deleteFollower
}