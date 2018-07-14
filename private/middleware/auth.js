const authenticate = (req, res, next) => {
    if (req.session.user) {
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