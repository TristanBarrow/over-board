const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello OverBoard!');
});

app.listen(PORT, console.log('Over Board is Listening on Port: ' + PORT));