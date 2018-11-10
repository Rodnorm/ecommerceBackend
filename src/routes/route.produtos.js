'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller');

router.get('/', controller.get);//retorna todos os produtos
router.get('/slug/:slug', controller.getBySlug);//retorna produtos por slug
router.get('/tags/:tags', controller.getByTag);//reporna produtos por tag
router.post('/', controller.post);//adiciona produto
router.put('/:id', controller.put);//altera produto
router.delete('/:id', controller.delete);//deleta produto

module.exports = router;