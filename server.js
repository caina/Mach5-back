'use-strict'

const express = require('express');
const config = require('./config');
const route = require('./routes/route');
const app = express();



app.use('/mach', route);
app.listen(config.port);
console.log("running at Mach5 Speed");