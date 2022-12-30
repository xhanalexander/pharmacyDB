const express = require('express');
const router = express.Router();
const {create, GetAll, updates, deletes} = require('../controller/obatController');

router.post('/create/obat', create)
router.get('/get/obat', GetAll)
router.put('/edit/:id', updates)
router.delete('/delete/:id', deletes)

module.exports = router
