'use strict'

const repository = require('../repositories/customer.repository')
const md5 = require('md5');
const emailService = require('../services/email.services');
const authService = require('../services/auth.service');

exports.post = async (req, res, next) => {
    try {
        await repository
            .post({
                name: req.body.name,
                email: req.body.email,
                password: md5(req.body.password + global.SALT_KEY)
            });

        emailService.send(
            req.body.email,
            `Olá!`,
            global.EMAIL_TMPL.replace('{0}', req.body.name));

        res.status(201).send({
            message: 'Cliente cadastrado com sucesso'
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha ao cadastrar Cliente',
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

exports.authenticate = async (req, res, next) => {
    try {
        const custumer = await repository
            .authenticate({
                email: req.body.email,
                password: md5(req.body.password + global.SALT_KEY)
            });

        const token = await authService.generateToken(
            {   id: custumer.id,
                email: custumer.email,
                name: custumer.name 
            });

            if (!custumer) {
                res.status(404).send({
                    message: 'Usuário ou senha inválidos'
                });
                return;
            }

        res.status(201).send({
            message: 'Autenticação bem sucedida',
            token: token,
            data: {
                email: custumer.email,
                name: custumer.name
            }
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha na autenticação',
            data: e
        });
    }
}