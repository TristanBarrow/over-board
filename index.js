const express = require('express');
const bodyParser = require('body-parser');

const boards = require("./private/endpoints/boards.js");
const friends = require("./private/endpoints/friends.js");
const pages = require("./private/endpoints/pages.js");
const tricks = require("./private/endpoints/tricks.js");
const user = require("./private/endpoints/user.js");

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();
// console.log(boards);
// console.log(friends);
// console.log(pages);
// console.log(tricks);
// console.log(user);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', pages.redirect);

/** PAGES **/

app.get('/login', pages.login);
app.get('/create-account', pages.createAccount);
app.get('/home', pages.home);

/** USER **/
app.route('/user/:id')
  .get(user.getUserInfo)
  .put(user.updateUser)
  .delete(user.deleteUser);

app.post('/user/create', user.createUser);
app.get('/user-login', user.login);
app.get('/check-username/:username', user.checkUsername);
app.put('/user-info', user.updateUserInfo);

/** FRIENDS **/
app.route('/friends/:id')
  .get(friends.getFriends)
  .post(friends.addFriend)
  .delete(friends.deleteFriend);

/** TRICKS **/

app.route("/tricks/:id")
  .get(tricks.getTricks)
  .post(tricks.addTrick)
  .put(tricks.updateTrick)
  .delete(tricks.deleteTrick);

// /** BOARDS **/
app.get('/boards', boards.getBoards);
app.get('/board/:name', boards.getBoardTricks);

app.listen(PORT, console.log('Over Board is Listening on Port: ' + PORT));