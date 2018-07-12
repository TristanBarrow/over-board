const db = require('../db-access/boards');
const translateBoardNames = require('../cradle/boards.js'); 

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
    // The url will have small spaceless tag on it this translates it into something the db 
    // can understand.
    const name = translateBoardNames(req.params.name, true);
    db.getTricks(name, (err, response) => {
        if (err) {
            console.log(err);
            res.status(400).send('There was an error. Please try again.');
        }
        res.json(response);
    });
   
}

module.exports = {
    getBoards: getBoards,
    getBoardTricks: getBoardTricks
}