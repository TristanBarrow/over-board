const db = require('../db-access/user.js'); 

// GET /user/username                    # Get a users info
// const getUserInfo = (req, res) => {
//     res.send('Get user info');   
// }

// GET /check-username/:username
const checkUsername = (req, res) => {
    db.checkUsername(req.params.username, (err, response) => {
        if (response) {
            console.log("Username " + req.params.username + " is avalable (" + response + ")");
        } else {
            console.log("Username " + req.params.username + " is not avalable (" + response + ")");
        }
        res.json(response);
    });
}

// POST /user/create + body            # Create a new user
const createUser = (req, res) => {
    console.log(req.body)
    db.createUser(req.body.username, req.body.password, (err, result) => {
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

// PUT /user/password + body             # Updates a user
const updateUser = (req, res) => {
    db.changePassword(req.body.username, req.body.password, (err, response) => {
        res.json({ success: !err });
    });
}

// DELETE /user + body          # Deletes user with required login info
const deleteUser = (req, res) => {
    db.deleteUser(req.body.username, (err, response) => {
        if (err) {
            res.json({ success: false });
        } else {
            res.json({ success: true });
        }
    });
}

// POST /user/login + body          # Logs the a user in and verifies user exists
const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.checkUsername(username, (err, response) => {
        if (err) {
            res.json({ success: false });
        } else {
            db.verifyPassword(username, password, (err, success) => {
                if (err) {
                    res.json({ success: false });
                } else {
                    req.session.user = username;
                    res.json({ success: true });
                }
                
            });
        }
        
    });
}

const logout = (req, res) => {
	if (req.session.user) {
		req.session.destroy();
        res.json({ success: true });
	} else {
        res.json({ success: false });
    }
}

module.exports = {
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    login: login,
    logout: logout,
    checkUsername: checkUsername
}

