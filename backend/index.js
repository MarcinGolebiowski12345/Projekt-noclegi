const express = require('express');
const server = express();
const { port } = require('./config');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./db/mongoose');

const usersRouter = require('./routes/usersRoutes');
const hotelsRouter = require('./routes/hotelRoutes');

server.use(cors());
server.use(bodyParser.json());
server.use('/', usersRouter);
server.use('/', hotelsRouter);

server.listen(port, function() {
    console.log('serwer słucha... http://localhost:' + port);
});