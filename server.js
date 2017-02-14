'use-strict'

require('./config/mongo-connection');

const express = require('express');
const app = express();
const config = require('./config/config');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/mach', require('./routes/route'));
app.listen(config.port);
console.log(config.greeting_message);