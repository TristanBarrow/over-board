// GET     /tricks/:id                 # Gets a users tricks
const getTricks = (req, res) => {
    res.send('Gets tricks');
}

// POST    /tricks/:id + body          # Add a uset trick 
const addTrick = (req, res) => {
    res.send('Add Trick');
}

// PUT     /tricks/:id + body          # Updates trick status
const updatePassword = (req, res) => {
    res.send('Update Trick');
}

// DELETE  /tricks/:id + body          # Deletes A trick 
const updatePassword = (req, res) => {
    res.send('Deletes a trick');
}