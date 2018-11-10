'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const repository = require('../repositories/product-repository')

exports.post = (req, res, next) => {
    repository
        .post(req)
        .then(() => {
            res.status(201).send({
                message: 'Produto cadastrado com sucesso'
            });
        })
        .catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar produto',
                data: e
            });
        });
}

exports.put = (req, res, next) => {
    repository
        .put(req)
        .then(() => {
            res.status(201).send({
                message: 'Produto atualizado com sucesso!'
            });
        })
        .catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar o produto',
                data: e
            })
        });
}

exports.delete = (req, res, next) => {
    repository
        .delete(req)
        .then(() => {
            res.status(201).send({
                message: 'Produto removido com sucesso!'
            });
        })
        .catch(e => {
            res.status(400).send({
                message: 'Falha ao remover o produto',
                data: e
            })
        });
}

exports.get = (req, res, next) => {
    repository
        .get()
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        });
}

exports.getBySlug = (req, res, next) => {
    repository
        .getBySlug(req)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        });
}

exports.getByTag = (req, res, next) => {
    repository
        .getByTag(req)
        .then(data => {
            res.status(200).send({ message: 'sucesso', data });
        })
        .catch(e => {
            res.status(400).send(e);
        });
}