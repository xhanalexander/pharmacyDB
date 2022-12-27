const express = require('express');
const router = express.Router();
const {create, GetAll} = require('../controller/factoryController');

router.post('/create/factory', create)
router.get('/get/factory', GetAll)

module.exports = router
