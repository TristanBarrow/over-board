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
    res.send('Add Trick');
}

// PUT     /tricks/:id + body          # Updates trick status
const updateTrick = (req, res) => {
    res.send('Update Trick');
}

// DELETE  /tricks/:id + body          # Deletes A trick 
const deleteTrick = (req, res) => {
    res.send('Deletes a trick');
}

module.exports = {
    getTricks: getTricks,
    addTrick: addTrick,
    updateTrick: updateTrick,
    deleteTrick: deleteTrick
}