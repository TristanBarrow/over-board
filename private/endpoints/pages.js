const p = require('path');

const redirect = (req, res) => {
    if (req.session.user) {
        res.send("<script> window.location = '/home'; </script>");
    } else {
        res.send("<script> window.location = '/login'; </script>");
    }
}

const login = (req, res) => {
    if (req.session.user) {
        res.send("<script> window.location = '/home'; </script>");
    } else {
        res.sendFile(p.join(__dirname, '..', '..', 'pages', 'login.html'));
    }
}

const createAccount = (req, res) => {
    if (req.session.user) {
        res.send("<script> window.location = '/home'; </script>");
    } else {
        res.sendFile(p.join(__dirname, '..', '..', 'pages', 'create-account.html'));
    }
}

const home = (req, res) => {
    if (!req.session.user) {
        res.send("<script> window.location = '/login'; </script>");
    } else {
        res.sendFile(p.join(__dirname, '..', '..', 'pages', 'home.html'));
    }
    
}

module.exports = {
    redirect: redirect,
    login: login,
    createAccount: createAccount,
    home: home
}