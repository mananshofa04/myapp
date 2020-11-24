const express = require('express'); 
const model = require('../models/index');// GET users listing.

const postProduct = async function (req, res, next) {
  try {
    const {
      sku,
      name,
      price,
      stock
    } = req.body;
    const product = await model.products.create({
      sku,
      name,
      price,
      stock
    });
  if (product) {
    res.status(201).json({
      'status': 'OK',
      'messages': 'Product berhasil ditambahkan',
      'data': product,
    })
  }
 } catch (err) {
   res.status(400).json({
     'status': 'ERROR',
     'messages': err.message,
     'data': {},
   })
 }
}
module.exports = postProduct;