const db = require('../db-access/user.js'); 

// GET /user/:id                    # Get a users info
const getUserInfo = (req, res) => {
    res.send('Get user info');   
}

// GET /check-username/:username
const checkUsername = (req, res) => {
    db.checkUsername(req.params.username, (err, response) => {
        console.log(response)
        res.json(response);
    });
}

// POST /user/create + body            # Create a new user
const createUser = (req, res) => {
    db.createUser(req.body.username, req.body.password, (err) => {
        if (err) {
            res.json({
                success: false,
                error: err.detail,
                usernameWasSent: !!req.body.username,
                passwordWasSent: !!req.body.password
            })
        } else {
            res.json({
                success: true,
                usernameWasSent: !!req.body.username,
                passwordWasSent: !!req.body.password
            })
        }
    });
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
    const username = req.body.username;
    const password = req.body.password;
    db.checkUsername(username, (err, response) => {
        if (err) {
            throw err;
        }
        if (!response) {
            res.json({ success: false });
        }
        db.verifyPassword(username, password, (err, hash) => {
            res.json({
                hash: hash
            });
        });
    });
}

// PUT /user/info + body            # Updates users password
const updateUserInfo = (req, res) => {
    res.send('Update User Password');
}

module.exports = {
    getUserInfo: getUserInfo,
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    login: login,
    updateUserInfo: updateUserInfo,
    checkUsername: checkUsername
}

