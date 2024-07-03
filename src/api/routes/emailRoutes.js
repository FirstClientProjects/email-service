const express = require('express');
const { sendNodemailerEmail } = require('../controllers/emailController');

const router = express.Router();

router.post('/nodemailer', sendNodemailerEmail);

module.exports = router;
