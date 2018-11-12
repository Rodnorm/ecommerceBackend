'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();
const config = require('./config');

mongoose.connect(config.connectionString, { useNewUrlParser: true });
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

//carregar as rotas
const index = require('./routes/index');
const produto = require('./routes/route.produtos');
const customer = require('./routes/route.customer');
const order = require('./routes/order.route');
//

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', index);
app.use('/produtos', produto);
app.use('/customers', customer);
app.use('/orders', order);


module.exports = app;