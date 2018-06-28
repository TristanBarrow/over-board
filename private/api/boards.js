
// GET     /boards                     # Gets each boards info
const getBoards = (req, res) => {
    res.send('Get Boards');
}
// GET     /board/:name                # Gets a specific boards set of tricks
const getBoardTricks = (req, res) => {
    res.send('Info for a specific board');
}

module.exports = {
    getBoards,
    getBoardTricks
}