const express = require('express'); 
const model = require('../models/index');// GET users listing.

const updateProd = async function (req, res, next) {
  try {
    const prodId = req.params.id;
    const {
      sku,
      name,
      price,
      stock
    } = req.body;
    const product = await model.products.update({
      sku,
      name,
      price,
      stock
    }, {
      where: {
        id: prodId
      }
    });
    if (product) {
      res.json({
        'status': 'OK',
        'messages': 'Product berhasil diupdate',
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

module.exports = updateProd;