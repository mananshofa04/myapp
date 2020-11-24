const express = require('express'); 
const model = require('../models/index');// GET users listing.

const postTransaction = async function (req, res, next) {
  try {
    const { 
      email,
      sku,
      quantity,
      note
    } = req.body;
    const transaction = await model.transaction.create({
      email,
      sku,
      quantity,
      note
    });
  if (transaction) {
    res.status(201).json({
      'status': 'OK',
      'messages': 'Transaksi berhasil ditambahkan',
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

module.exports = postTransaction;