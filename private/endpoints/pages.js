
const redirect = (req, res) => {
    res.send('Redirect page');
}

const login = (req, res) => {
    res.send('Login page');
}

const createAccount = (req, res) => {
    res.send('Create Account pag')
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