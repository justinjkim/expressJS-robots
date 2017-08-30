const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();


app.get('/', function(req, res) {
  res.send('Testing...');
})

app.listen(3000, function(req, res) {
  console.log('Starting up LinkedIn for Robots...');
})
