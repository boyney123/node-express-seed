var express = require('express');
var http = require('http');
var app = express();

app.get('/', function(req, res, next) {
	res.send('Hello World');
});


app.listen(8000);