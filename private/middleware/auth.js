const authenticate = (req, res, next) => {
    let username = null;
    if (req.param.username) {
        username = req.param.username;
        console.log('param: ', username);
    }
    if (req.body.username) {
        username = req.body.username;
        console.log('body: ', username);
    }
    console.log('session: ', req.session.user);
    if (username != null && username == req.session.user) {
        
        next();
    } else if (!username && req.session.user) {
        next();
    } else {
        res.status(401);
        res.json({ 
            success: false, 
            message: "Access Denied" 
        });
    } 
}

module.exports = authenticate;