var express = require('express');
var app = express();

app.get('/', function (req, res) {
  setTimeout(() => res.send('Im alive!'),100);
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
