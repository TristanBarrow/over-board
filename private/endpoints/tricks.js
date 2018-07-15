const db = require('../db-access/tricks.js');


// GET     /tricks/:id                 # Gets a users tricks
const getTricks = (req, res) => {
    console.log(req.params.username);
    db.getTricks(req.params.username, (err, result) => {
        if(err) {
            res.json({ success: false });
        } else {
            res.json({ success: true, tricks: result });
        }
    });
}

// POST    /tricks/:id + body          # Add a uset trick 
const addTrick = (req, res) => {
    db.addTrick(req.body, (err, result) => {
        if (err) {
            res.json({ success: false });
        } else {
            res.json({ success: true });
        }
    });
}

// PUT     /tricks/:id + body          # Updates trick status
const updateTrick = (req, res) => {
    db.deleteTrick(req.body.username, req.body.trick, (err, result) => {
        if (err) {
            res.json({ success: false, message: 'Issues in delete stage'});
        } else {
            db.addTrick(req.body, (err, result) => {
                if (err) {
                    res.json({ success: false, message: 'Issues in add stage'});
                } else {
                    res.json({ success: true });
                }
            });
        }
    });
}

// DELETE  /tricks/:id + body          # Deletes A trick 
const deleteTrick = (req, res) => {
    db.deleteTrick(req.body.username, req.body.trickid, (err, result) => {
        if (err) {
            res.json({ success: false });
        } else {
            res.json({ success: true });
        }
    });
}

const getProficiencies = (req, res) => {
    db.getProficiencies((err, result) => {
        if (err) {
            res.json({ success: false });
        } else {
            res.json(result);
        }
    });
}

module.exports = {
    getTricks: getTricks,
    addTrick: addTrick,
    updateTrick: updateTrick,
    deleteTrick: deleteTrick,
    getProficiencies: getProficiencies
}