var express = require('express');
var app = express();
var cache = {};

app.get('/', function (req, res) {
  res.send('Hello world!')
});

app.listen(4000, function () {
  console.log('listening on port 4000')
});

app.post('/set', function(req, res) {
  var query = req.query;
  Object.keys(query).forEach(function(key) {
    cache[key] = query[key];
  });
  res.status(200).end();
});

app.get('/get', function(req, res) {
  res.send(cache[req.query.key]);
})

module.exports = app
