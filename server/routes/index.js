const express = require('express');
const authenticateToken = require('../middleware/authenticateToken');
const router = express.Router();

const authRouter = require('./auth');
const adminRouter = require('./admin');
const artworkRouter = require('./artwork');

router.use('/auth', authRouter);
router.use('/admin', authenticateToken, adminRouter);
router.use('/artwork', authenticateToken, artworkRouter);

module.exports = router;
