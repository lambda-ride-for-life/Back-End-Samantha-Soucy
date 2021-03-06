const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/user-router.js');
const reviewsRouter = require("../users/reviews-router.js");
const driverRouter = require("../users/drivers-router.js");
const locationRouter= require("../users/locations-router.js")



const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use("/api/reviews", reviewsRouter);
server.use("/api/drivers", driverRouter);
server.use("/api/locations", locationRouter);

server.get("/", (req, res) => {
    res.send("Backend Deployed")
})

module.exports = server;
