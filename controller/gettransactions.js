const express = require('express'); 
const model = require('../models/index');// GET users listing.

exports.getAlltransaction = async function (req, res, next) {
  try {
    const transaction = await model.transaction.findAll({});
    if (transaction.length !== 0) {
      res.json({
        'status': 'OK',
        'messages': '',
        'data': transaction
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