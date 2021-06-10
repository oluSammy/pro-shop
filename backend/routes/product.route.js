const express = require('express');
const { getProductById, getProducts } = require('../controllers/productController.js');

const router = express.Router();

router.get('/', getProducts);

router.get('/:id', getProductById);

module.exports = router;
