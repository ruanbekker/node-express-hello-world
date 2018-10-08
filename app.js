var express = require('express');
var app = express();

app.get('/', function(req, res) {
  response = {
    message: 'hello, world!'
  }

  console.log('GET / Received');
  res.send(JSON.stringify(response) + '\n');
});

app.listen(3000, function() {
  console.log('Server Running');
});
