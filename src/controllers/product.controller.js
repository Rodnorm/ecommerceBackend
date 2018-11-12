'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const repository = require('../repositories/product.repository')

exports.post = async (req, res, next) => {

    try {
        await repository
            .post(req);

        res.status(201).send({
            message: 'Produto cadastrado com sucesso'
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha ao cadastrar produto',
            data: e
        });
    }
}

exports.put = async (req, res, next) => {
    try {
        await repository
            .put(req);
        res.status(201).send({
            message: 'Produto atualizado com sucesso!'
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha ao atualizar o produto',
            data: e
        })
    }
}

exports.delete = async (req, res, next) => {
    try {
        await repository.delete(req);
        res.status(201).send({
            message: 'Produto removido com sucesso!'
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha ao remover o produto',
            data: e
        });
    }
}

exports.get = async (req, res, next) => {
    try {
        let data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getBySlug = async (req, res, next) => {
    try {
        let data = await repository.getBySlug(req);
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.getByTag = async (req, res, next) => {
    try {
        let data = await repository
            .getByTag(req);
        res.status(200).send({ message: 'sucesso', data });
    } catch (e) {
        res.status(400).send(e);
    }
}