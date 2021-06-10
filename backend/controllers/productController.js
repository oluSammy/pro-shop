const Product = require('../models/products.models.js');
const asyncHandler = require('express-async-handler');

/**
 * @description fetch all products
 * @route GET /api/products
 * @access Public
 */
exports.getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

/**
 * @description fetch one product
 * @route GET /api/products/:id
 * @access Public
 */
exports.getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error('product not found');
  }
});
