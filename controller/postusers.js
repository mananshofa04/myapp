const express = require('express'); 
const model = require('../models/index');// GET users listing.
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

const postUsers = async function (req, res, next) {
  try {
    const {
      email,
      password,
      name,
      telephone,
      address
    } = req.body;
    const hash = bcrypt.hashSync(password, salt);
    
    const users = await model.users.create({ 
      email,
      password : hash,
      name,
      telephone,
      address
    });
  if (users) {
    res.status(201).json({
      'status': 'OK',
      'messages': 'User berhasil ditambahkan',
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


module.exports = postUsers;