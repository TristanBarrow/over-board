
const redirect = (req, res) => {
    res.send('Redirect page');
}

const loginPage = (req, res) => {
    res.send('Login page');
}

const createAccount = (req, res) => {
    res.send('Create Account pag')
}

const home = (req, res) => {
    res.send('Home Page');
}

module.exports = {
    redirect,
    loginPage,
    createAccount,
    home
}