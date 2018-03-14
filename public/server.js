const express = require('express');

const server = express();

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.get('/', (req, res) => res.send({ message: 'Hello World' }));

server.listen(9999, () => console.log('Server listening on port 6000...'));
