var express = require('express');
var app = express();
var messages = ['sorry, i did not get that', 'yes, i can help with that', 'no'];

app.get('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify({
    message: getRandomMessage()
  }));
});

app.listen(8887, function(){
  console.log('Listening on the port 8887');
});

app.options('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send();
});

app.get('/', function(req, res) {
  res.send(JSON.stringify({
    message: getRandomMessage()
  }))
});

// function getRandomMessage() {
//   var mes = Math.floor(Math.random() * 10);
//   var i = 0;
//   if (mes < 3) {
//     i = 0;
//   } else if (mes > 6) {
//     i = 2;
//   } else {
//     i = 1;
//   }
//   return messages[i];
// }

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
