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
app.use(bodyParser.json({
    limit: '5mb'
}));
app.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*');
    res.header('Acces-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept, x-access-token');
    res.header('Acces-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);
app.use('/products', produto);
app.use('/customers', customer);
app.use('/orders', order);


module.exports = app;