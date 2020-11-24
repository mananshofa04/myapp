const express = require('express'); 
const model = require('../models/index');// GET users listing.

const updateUsers = async function (req, res, next) {
  try {
    const usersId = req.params.id;
    const {
      email,
      password,
      name,
      telephone,
      address
    } = req.body;
    const users = await model.users.update({
      email,
      password,
      name,
      telephone,
      address
    }, {
      where: {
        id: usersId
      }
    });
    if (users) {
      res.json({
        'status': 'OK',
        'messages': 'User berhasil diupdate',
        'data': users,
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

module.exports = updateUsers;