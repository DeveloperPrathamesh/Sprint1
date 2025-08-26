const express = require('express');
const router = express.Router();
const {createLog, getAllLogs, getUserLogs, updateLog, deleteLog, updateProfile} = require('../controllers/logController')
const authMiddleware = require('../Auth/authMiddlewares')

router.post('/',authMiddleware, createLog);
router.get('/', getAllLogs);
// router.get('/', testLog);
router.get('/:id', authMiddleware, getUserLogs);
router.put('/:id', authMiddleware, updateLog);
router.delete('/:id', authMiddleware, deleteLog);

module.exports = router;