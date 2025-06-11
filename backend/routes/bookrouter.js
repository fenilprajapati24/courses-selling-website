const express = require('express');
const router = express.Router();

const { getbook } = require('../controllers/bookcontroller');

router.get('/', getbook);

module.exports = router;
