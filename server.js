'use-strict'
require('./config/mongo-connection');

const express = require('express');
const config = require('./config/config');
const route = require('./routes/route');
const app = express();

app.use('/mach', route);
app.listen(config.port);
console.log(config.greeting_message);