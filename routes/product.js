const express = require('express');

const { getAllProduct} = require('../controller/getproduct');

const postProd = require("../controller/postproduct");
const updateProd = require("../controller/updateproduct");
const deleteProd = require("../controller/deleteproduct");

const router = express.Router();
const model = require('../models/index');// GET users listing.
router.get('/', getAllProduct);// POST users
router.post('/', postProd);// UPDATE users
router.patch('/:id', updateProd);// DELETE users
router.delete('/:id', deleteProd);

module.exports = router;