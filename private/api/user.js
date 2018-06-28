
// GET /user/:id                    # Get a users info
const getUserInfo = (req, res) => {
    res.send('Get user info');
}

// POST /user/:id + body            # Create a new user
const createUser = (req, res) => {
    res.send('Create new user');
}

// PUT /user/:id + body             # Updates a user
const updateUser = (req, res) => {
    res.send('Updates a users info');
}

// DELETE /user/:id + body          # Deletes user with required login info
const deleteUser = (req, res) => {
    res.send('Delete User');
}

// POST /user/login + body          # Logs the a user in and verifies user exists
const login = (req, res) => {
    res.send('Login');
}

// PUT /user/info + body            # Updates users password
const updatePassword = (req, res) => {
    res.send('Update User Password');
}

module.exports = {
    getUserInfo,
    createUser,
    updateUser,
    deleteUser,
    login,
    updatePassword
}

