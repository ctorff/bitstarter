var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/hello', function(request, response) {
  response.send('Hello World 2!');
});

app.get('/', function(req, response) {
  var buff = fs.readFileSync(__dirname + '/index.html');
  response.send(buff.toString());
});

/*
app.get('/:dir/:file', function(req, response) {
  var buff = fs.readFileSync('static/' + req.params.dir + '/' + req.params.file);
  response.send(buff.toString());
});
*/
app.use(express.static(__dirname + '/static'));

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
