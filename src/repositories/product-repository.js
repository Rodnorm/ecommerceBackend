'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () => {
    return Product
        .find({
            active: true
        }, 'title price slug');
}

exports.post = (req) => {
    return new Product(req.body).save();
}

exports.put = (req) => {
    return Product
        .findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price
            }
        });
}

exports.delete = (req) => {
    return Product
        .findOneAndRemove(req.params.id);
}

exports.getBySlug = (req) => {
    return Product
        .find(
            {
                slug: req.params.slug,
                active: true
            }, 'title price slug description tags');
}

exports.getByTag = (req) => {
    return Product
        .findOne(
            {
                tags: req.params.tags,
                active: true
            }, 'title price slug description tags');
}