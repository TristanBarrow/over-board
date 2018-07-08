const p = require('path');

const redirect = (req, res) => {
    res.redirect('/login');
}

const login = (req, res) => {
    res.sendFile(p.join(__dirname, '..', '..', 'pages', 'login.html'));
}

const createAccount = (req, res) => {
    res.sendFile(p.join(__dirname, '..', '..', 'pages', 'create-account.html'));
}

const home = (req, res) => {
    res.send('Home Page');
}

module.exports = {
    redirect: redirect,
    login: login,
    createAccount: createAccount,
    home: home
}