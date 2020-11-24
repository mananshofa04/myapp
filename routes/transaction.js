const express = require('express');

const { getAlltransaction } = require('../controller/gettransactions');

const postTrans = require("../controller/posttransactions");
const updateTrans = require("../controller/updatetransactions");
const deleteTrans = require("../controller/deletetransactions");

const router = express.Router();
const model = require('../models/index');

// GET transaction listing.
router.get('/', getAlltransaction);

// POST transaction
router.post('/', postTrans);

// UPDATE transaction
router.patch('/:id', updateTrans);

// DELETE transaction
router.delete('/:id', deleteTrans);


module.exports = router;