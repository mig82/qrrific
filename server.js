"use strict";
var express = require('express');
var app = express();

/*app.get('/', function(req, res){
	res.send("Hello world from QRrific");
});*/

app.use(express.static(__dirname + "/www"));

app.get("/qrrific", function(req, res){
	console.log("I received a get request");

	var p1 = {};

	

	res.json(p1);
});

app.listen(4000)
console.log("QRrific server running on port 4000");