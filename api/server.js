const express = require('express');

const configureMiddleware = require('./middleware.js');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/user-router.js');



const server = express();


configureMiddleware(server);

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);


module.exports = server;
