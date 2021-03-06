var express = require('express');
var p = require('path');
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
app.get("/plasmaXmas.jpg", function (request, response) {
	response.sendFile(p.join(__dirname + '/res/plasmaXmas.jpg'));
});
app.get("/Ashley.jpeg", function (request, response) {
	response.sendFile(p.join(__dirname + '/res/Ashley.jpeg'));
});
app.get("/Annie.jpeg", function (request, response) {
	response.sendFile(p.join(__dirname + '/res/Annie.jpeg'));
});
app.get("/Peter.jpeg", function (request, response) {
	response.sendFile(p.join(__dirname + '/res/Peter.jpeg'));
});
app.get("/Lewis.jpeg", function (request, response) {
	response.sendFile(p.join(__dirname + '/res/Lewis.jpeg'));
});
app.get("/Madison.jpeg", function (request, response) {
	response.sendFile(p.join(__dirname + '/res/Madison.jpeg'));
});
app.get("/Somya.jpeg", function (request, response) {
	response.sendFile(p.join(__dirname + '/res/Somya.jpeg'));
});
app.get("/elfHeader.gif", function (request, response) {
	response.sendFile(p.join(__dirname + '/res/elfHeader.gif'));
});
app.get("/myFavicon.ico", function (request, response) {
	response.sendFile(p.join(__dirname + '/res/myFavicon.ico'));
});
app.listen(process.env.PORT || 5000)