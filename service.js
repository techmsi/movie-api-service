const request = require('superagent');
const service = require('./api');
const server = require('http').createServer(service);

const port = process.env.PORT || 3002;

server.listen(port);
// --- Setup Server --- //
server.on('listening', err => {
  if (err) {
    return console.log('Something bad happened', err);
  }

  console.log(`Service (API) is listening on ${server.address().port} in "${service.get('env')}" mode.`);
});

module.exports = service;
