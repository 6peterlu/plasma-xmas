var express = require('express');
var p = require('path');
var app = express();

app.get("/", function (request, response) {
  response.sendFile(p.join(__dirname + '/index.html'));
});

app.listen(8080);