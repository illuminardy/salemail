const express = require('express');
const app = express();
const emails = require('./emails.json');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  console.log("here")
  res.json(emails);
});

app.listen(3001, () => {
  console.log('Listening on port: 3001');
});