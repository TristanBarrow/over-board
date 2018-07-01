const db = require('../db-access/boards');
const boardsLU = require('../cradle/boards.js'); 

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
    const name = boardsLU(req.params.name, true);
    db.getTricks(name, (err, response) => {
        if (err) {
            console.log(err);
            res.status(400).send('A Database Error Occered we will get back to you soon.');
        }
        res.json(response);
    });
   
}

module.exports = {
    getBoards: getBoards,
    getBoardTricks: getBoardTricks
}