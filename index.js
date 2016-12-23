var express = require('express');
var p = require('path');
var shuffleSeed = require('shuffle-seed')
var app = express();

app.get("/", function (request, response) {
  response.sendFile(p.join(__dirname + '/index.html'));
});
app.get("/loginhandling.js", function (request, response) {
  response.sendFile(p.join(__dirname + '/loginhandling.js'));
});
app.get("/compiledhandler.js", function (request, response) {
  response.sendFile(p.join(__dirname + '/compiledhandler.js'));
});

app.listen(process.env.PORT || 5000)