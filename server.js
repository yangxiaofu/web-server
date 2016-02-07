var express = require("express");
var app = express();
var port = process.env.port || 3000;  // used for heroku . modified

var middleware = require('./middleware.js')
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

//gets the informaiton that is required.
app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('About Us');
});

//gets everything here.
app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
	console.log(port);
});