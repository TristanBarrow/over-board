const db = require('../db-access/followers.js');

// GET     /following/:username                 # Gets a users followers
const getFollowers = (req, res) => {
    db.getFollowers(req.session.user, (err, response) => {
        if (err) {
            res.json({success: false });
        }
        res.json(response.rows);
    });
}

// POST    /following + body          # adds a follower
const addFollower = (req, res) => {
    db.addFollower(req.body.username, req.body.followed, (err, response) => {
        if (err) {
            res.json({ success: false });
        }
        res.json({ success: true });
    });
}

// DELETE  /following/:username + body          # Deletes a follower
const deleteFollower = (req, res) => {
    db.deleteFollower(req.body.username, req.body.followed, (err, response) => {
        if (err) {
            res.json({ success: false });
        }
        res.json({ success: true });
    });
}

module.exports = {
    getFollowers: getFollowers,
    addFollower: addFollower,
    deleteFollower: deleteFollower
}