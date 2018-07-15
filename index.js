const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const r = require('./private/routes.js');
const auth = require('./private/middleware/auth.js');
const log = require('./private/middleware/log.js');
const sessionConfig = require('./session-config.js');

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(log);
app.use(session(sessionConfig));

app.get('/', r.pages.redirect);

/** PAGES **/

app.get('/login', r.pages.login);
app.get('/create-account', r.pages.createAccount);
app.get('/home', r.pages.home);

/** USER **/
// AUTH
app.put('/api/user/password', auth, r.user.updateUser);
app.delete('/api/user', auth, r.user.deleteUser);
app.get('/api/user/logout', auth, r.user.logout);

// NON-AUTH
app.post('/api/user/create', r.user.createUser);
app.post('/api/user/login', r.user.login);
app.get('/api/user/check/:username', r.user.checkUsername);

/** FOLLOWERS **/
// AUTH
app.get('/api/following/:username', auth, r.following.getFollowers);
app.post('/api/following', auth, r.following.addFollower);
app.delete('/api/following', auth, r.following.deleteFollower);

/** TRICKS **/
// NON-AUTH
app.get("/api/tricks/:username", r.tricks.getTricks);
app.get("/api/profs", r.tricks.getProficiencies);
// AUTH
app.post("/api/tricks", auth, r.tricks.addTrick);
app.put("/api/tricks", auth, r.tricks.updateTrick);
app.delete("/api/tricks", auth, r.tricks.deleteTrick);

// /** BOARDS **/
// NON-AUTH
app.get('/api/boards', r.boards.getBoards);
app.get('/api/board/tricks/:board', r.boards.getBoardTricks);

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, console.log('Over Board is Listening on Port: ' + PORT));