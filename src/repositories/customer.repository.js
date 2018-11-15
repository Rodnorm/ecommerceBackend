'use strict'

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');



exports.post = async(body) => {
    const res = await new Customer(body).save();
    return res;
}

exports.get = async() => {
    const res = await Customer
        .find({
            active: true
        }, 'name password email');
    return res;
}

exports.authenticate = async(data) => {
    const res = await Customer
        .findOne({
            email: data.email,
            password: data.password
        });
    return res;
}
