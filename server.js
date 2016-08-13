var express = require('express');
var app = express();
var http = require('http');

app.use(express.static('public'));

app.get('/operations', function (req, res) {

	var opr = req.query.opr;
	
	var optionsget = {
    		host : 'test-nmo-appdyna-poc.apps.nmolabs.com',
    		port : 80,
    		path : '/'+opr,
    		method : 'GET' // GET Method
	};

        res.writeHead(200, {'Content-Type': 'application/json'});
        // HTTP GET request
        var reqGet = http.request(optionsget, function(response) {
            response.on('data', function(data) { 
                  res.end(data);
            });
        });

        reqGet.end();
        reqGet.on('error', function(e) {
            console.error(e);
        });
    });

	app.get('/', function (req, res) {
			res.sendfile( __dirname + "/" + "index.html" );
	});

app.listen(process.env.PORT || 3000);

