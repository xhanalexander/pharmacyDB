const express = require('express');
const router = express.Router();
const {create, GetAll} = require('../controller/obatController');

router.post('/create/obat', create)
router.get('/get/obat', GetAll)

module.exports = router
