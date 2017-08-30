const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./data.js');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index', data);
})

app.get('/:profile', function(req, res) {
  let profileID = req.params.profile - 1;
  res.render('profile', data.users[profileID]);
})

app.listen(3000, function(req, res) {
  console.log('Starting up LinkedIn for Robots...');
})
