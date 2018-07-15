const db = require('../db-access/followers.js');

// GET     /following/:username                 # Gets a users followers
const getFollowers = (req, res) => {
    db.getFollowers(req.query, (err, response) => {
        if (err) {
            res.json(false);
        }
        res.json(response);
    });
}

// POST    /following/:username + body          # adds a friend
const addFollower = (req, res) => {
    db.getFollowers(req.query, (err, response) => {
        if (err) {
            res.json({ success: false });
        }
        res.json({success: true, log: response });
    });
}

// DELETE  /following/:username + body          # Deletes a friend
const deleteFollower = (req, res) => {
    
}

module.exports = {
    getFollowers: getFollowers,
    addFollower: addFollower,
    deleteFollower: deleteFollower
}