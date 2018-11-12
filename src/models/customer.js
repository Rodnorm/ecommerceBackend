'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: [true, 'O nome é obrigatório']
    },
    email: {
        type: String,
        required: [true, 'O email é obrigatório']
    },
    password: {
        type: String,
        required: [true, 'A senha é obrigatória']
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model('Customer', schema);
