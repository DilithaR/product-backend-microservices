const express = require('express');
const router = express.Router();

const ProductService = require('../services/product.service');

module.exports = () => {

    router.get('/', ProductService.getProducts);
    router.get('/:id', ProductService.getProduct);
    router.post('/', ProductService.addProduct);
    router.put('/', ProductService.updateProduct);
    router.delete('/:id', ProductService.deleteProduct);

    return router;
}
