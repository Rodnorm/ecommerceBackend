'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//carregar as rotas
const index = require('./routes/index');
const produto = require('./routes/route.produtos');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', index);
app.use('/produto', produto);


module.exports = app;