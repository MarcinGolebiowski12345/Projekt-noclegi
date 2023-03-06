const express = require('express');
const server = express();
const { port } = require('./config');
const bodyParser = require('body-parser');

require('./db/mongoose');

const usersRouter = require('./routes/usersRoutes');
//const hotelsRouter = require('')

server.use(bodyParser.json());
server.use('/', usersRouter);
//server.use('/', hotelsRouter);

server.listen(port, function() {
    console.log('serwer słucha... http://localhost:' + port);
});