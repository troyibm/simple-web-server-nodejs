var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/demo.html'));
});

console.log("listening at https://localhost:8080");

app.listen(8080);