'use strict'

const mongoose = require('mongoose');
const Order = mongoose.model('Order');


exports.post = async(req) => {
    const res = await new Order(req).save();
    return res;
}

exports.get = async() => {
    const res = await Order
        .find({}, 'number status customer items')
        .populate('customer', 'name')
        .populate(' items.product', 'title');
    return res;
}

