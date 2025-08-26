const express = require('express');
const router = express.Router();
const {generateReport} = require('../controllers/reportController')

router.get('/:userId/report', generateReport);

module.exports = router;