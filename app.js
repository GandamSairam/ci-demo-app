const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello DevOps CI Pipeline');
});

module.exports = app;

