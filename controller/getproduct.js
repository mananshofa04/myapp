const express = require('express'); 
const model = require('../models/index');// GET users listing.

exports.getAllProduct = async function (req, res, next) {
  try {
    const product = await model.products.findAll({});
    if (product.length !== 0) {
      res.json({
        'status': 'OK',
        'messages': '',
        'data': product
      })
    } else {
      res.json({
        'status': 'ERROR',
        'messages': 'EMPTY',
        'data': {}
      })
    }
  } catch (err) {
    res.json({
      'status': 'ERROR',
      'messages': err.messages,
      'data': {}
    })
  }
}