var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/app'));

app.get('*', function(req, res) {
	res.sendFile('index.html', {root: __dirname});
});

var port = process.env.PORT || 5000;
app.listen(port);

console.log('Running on localhost: ' + port);

exports = module.exports = app;