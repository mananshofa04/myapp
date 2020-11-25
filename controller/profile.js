const express = require('express'); 
const model = require('../models/index');// GET users listing.
 
exports.getOneUser = async function (req, res, next) {
  try {
    const { id } =  req.body.users; 
    const users = await model.users.findOne({ where: {
      id: id
    }});
    if (users && users !== '') {
        res.status(200).json({
          'status': 'OK',
          'messages': 'Data User yang login',
          'data': users,
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