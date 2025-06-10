const express = require('express');
const { createPayment, webhook } = require('../controllers/payment.controller');
const router = express.Router();

router.post('/create', createPayment);
router.post('/webhook', webhook);

module.exports = router