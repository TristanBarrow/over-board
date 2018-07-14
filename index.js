const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const boards = require("./private/endpoints/boards.js");
const following = require("./private/endpoints/followers.js");
const pages = require("./private/endpoints/pages.js");
const tricks = require("./private/endpoints/tricks.js");
const user = require("./private/endpoints/user.js");

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', pages.redirect);

/** PAGES **/

app.get('/login', pages.login);
app.get('/create-account', pages.createAccount);
app.get('/home', pages.home);

/** USER **/
app.put('/user/password', user.updateUser);
app.delete('/user', user.deleteUser);
//  .get(user.getUserInfo)

app.post('/user/create', user.createUser);
app.post('/user-login', user.login);
app.get('/check-username/:username', user.checkUsername);
app.put('/user-info', user.updateUserInfo);

/** FRIENDS **/
app.get('/following/:username', following.getFollowers);
app.post('/following', following.addFollower);
app.delete('/following', following.deleteFollower);

/** TRICKS **/
app.route("/tricks/:username")
  .get(tricks.getTricks)
  .post(tricks.addTrick)
  .put(tricks.updateTrick)
  .delete(tricks.deleteTrick);

// /** BOARDS **/
app.get('/boards', boards.getBoards);
app.get('/board/:name', boards.getBoardTricks);

app.listen(PORT, console.log('Over Board is Listening on Port: ' + PORT));