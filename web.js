var express = require("express");
var app = express();

app.use(express.logger());
app.use('/style',express.static(__dirname + '/style'));
app.use('/script',express.static(__dirname + '/script'));
app.use('/image',express.static(__dirname + '/image'));

app.get('/', function(request, response) {
  response.sendfile('./html/index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});