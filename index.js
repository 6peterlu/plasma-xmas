var express = require('express');
var p = require('path');
var app = express();

app.get("/", function (request, response) {
  response.sendFile(p.join(__dirname + '/index.html'));
});
app.get("/loginhandling.js", function (request, response) {
  response.sendFile(p.join(__dirname + '/loginhandling.js'));
});

app.listen(process.env.PORT || 5000)