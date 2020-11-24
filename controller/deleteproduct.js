const express = require('express'); 
const model = require('../models/index');// GET users listing.

const deleteProd = async function (req, res, next) {
  try {
    const prodId = req.params.id;
    const product = await model.products.destroy({ where: {
      id: prodId
    }})
    if (product) {
      res.json({
        'status': 'OK',
        'messages': 'Product berhasil dihapus',
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

module.exports = deleteProd;