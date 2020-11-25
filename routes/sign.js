const express = require('express');   
const {signin} = require("../controller/sign"); 

const { getOneUser} = require('../controller/profile');
const router = express.Router();
const model = require('../models/index');// GET users listing.
const auth = require('../middleware/authentication');
// POST users
router.post('/login', signin); 
router.post('/profile', auth.userAuth, getOneUser);

  
module.exports = router;