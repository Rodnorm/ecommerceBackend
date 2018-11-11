'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const res = await Product
        .find({
            active: true
        }, 'title price slug');
    return res;
}

exports.post = async(req) => {
    const res = await new Product(req.body).save();
    return res;
}

exports.put = async(req) => {
    const res = await Product
        .findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price
            }
        });
    return res;
}

exports.delete = async(req) => {
    const res = await Product
        .findOneAndRemove(req.params.id);
    return res;   
}

exports.getBySlug = async(req) => {
    const res = await Product
        .find(
            {
                slug: req.params.slug,
                active: true
            }, 'title price slug description tags');
    return res;        
}

exports.getByTag = async(req) => {

    const res = await Product
        .findOne(
            {
                tags: req.params.tags,
                active: true
            }, 'title price slug description tags');
    return res;        
}