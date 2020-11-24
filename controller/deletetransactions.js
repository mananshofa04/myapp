const express = require('express'); 
const model = require('../models/index');// GET users listing.

const deleteTrans = async function (req, res, next) {
  try {
    const transId = req.params.id;
    const transaction = await model.transaction.destroy({ where: {
      id: transId
    }})
    if (transaction) {
      res.json({
        'status': 'OK',
        'messages': 'User berhasil dihapus',
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

module.exports = deleteTrans;