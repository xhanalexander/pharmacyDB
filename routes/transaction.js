const express = require('express');
const router = express.Router();
const {CheckOut} = require('../controller/OrderController');
const {GetTransaction}  = require('../controller/DetailTransactionController')

router.post('/checkout', CheckOut)
router.get('/orders', GetTransaction)

module.exports = router
