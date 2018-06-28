const express = require('express');
const p = require('path');
const boards = require(p.join(__dirname, ''));
const PORT = process.env.PORT || 5000;
const app = express();


app.get('/', (req, res) => {
  res.send('Hello OverBoard!');
});

/** PAGES **/

app.get('/login', );

app.




app.listen(PORT, console.log('Over Board is Listening on Port: ' + PORT));