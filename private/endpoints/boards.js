const db = require('../db-access/boards');

// GET     /boards                     # Gets each boards info
const getBoards = (req, res) => {
    db.getBoards((err, response) => {
        if (err) {
            console.log(err);
            res.status(400).send('A Database Error Occered we will get back to you soon.');
        }
        res.json(response);
    });
}
// GET     /board/:name                # Gets a specific boards set of tricks
const getBoardTricks = (req, res) => {
    res.send('Info for a specific board');
}

module.exports = {
    getBoards: getBoards,
    getBoardTricks: getBoardTricks
}