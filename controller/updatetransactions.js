const express = require('express'); 
const model = require('../models/index');// GET users listing.

const updateTrans = async function (req, res, next) {
  try {
    const transId = req.params.id;
    const {
      email,
      sku,
      quantity,
      note
    } = req.body;
    const transaction = await model.transaction.update({
      email,
      sku,
      quantity,
      note
    }, {
      where: {
        id: transId
      }
    });
    if (transaction) {
      res.json({
        'status': 'OK',
        'messages': 'Transaction berhasil diupdate',
        'data': transaction,
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

module.exports = updateTrans;