const express = require('express'); 
const { getAllUser } = require('../controller/getusers');

const postUsers = require("../controller/postusers");
const updateUsers = require("../controller/updateusers");
const deleteUsers = require("../controller/deleteusers");

const router = express.Router();
const model = require('../models/index');// GET users listing.

router.get('/', getAllUser);

// POST users
router.post('/', postUsers); 


// UPDATE users
router.patch('/:id', updateUsers);


// DELETE users
router.delete('/:id', deleteUsers);


module.exports = router;