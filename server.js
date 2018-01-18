var express = require('express');
var app = express();

app.get('/', function(request, response){
//always send a response to a get or push. important
		response.send('My First API!');
});

app.get('/funions', function(req, res){
	res.send('Yo gimme some funions!');
});

app.listen(3000, function() {
	console.log("First API running on port 3000!");
});