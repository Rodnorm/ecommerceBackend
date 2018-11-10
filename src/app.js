'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

mongoose.connect('mongodb://normando1:normando1@ds261247.mlab.com:61247/ecommerce-database', { useNewUrlParser: true });
const Product = require('./models/product');

//carregar as rotas
const index = require('./routes/index');
const produto = require('./routes/route.produtos');
//

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', index);
app.use('/produtos', produto);


module.exports = app;