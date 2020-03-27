const express = require('express');
const helmet = require('helmet');
const CORS = require('cors');
const session = require('express-session');

const server = express();

const characterRouter = require('../characters/characters-router');

const sessionConfig = {
    name: 'monster',
    secret: 'this is a super secret',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false, //true in production to send over https
        httpOnly: true, //true means no access from JS
    },
    resave: false,
    saveUninitialized: true,
}

server.use(helmet());
server.use(express.json());
server.use(CORS());
server.use(session(sessionConfig));


server.get('/', (req, res ) => {
    res.json({ server: "running"})
})



module.exports = server;