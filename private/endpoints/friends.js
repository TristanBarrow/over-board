
// GET     /friends/:id                 # Gets a users friends
const getFriends = (req, res) => {
    res.send('Get users friends');
}

// POST    /friends/:id + body          # adds a friend
const addFriend = (req, res) => {
    res.send('Add a Friend');
}

// DELETE  /friends/:id                 # Deletes a friend
const deleteFriend = (req, res) => {
    res.send('Delete a friend');
}

module.exports = {
    getFriends: getFriends,
    addFriend: addFriend,
    deleteFriend: deleteFriend
}