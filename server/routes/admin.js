const express = require('express');
const Users = require('../models/Users');
const router = express.Router();

router.get('/unapproved', async (req, res) => {
    try {
        const users = await Users.findAll({ where: { isApproved: false } });
        res.json(users);
    } catch (err) {
        res.status(500).send('Server error');
        console.log('Error :>> ', err);
    }
});

router.put('/approve/:id', async (req, res) => {
    try {
        const user = await Users.findByPk(req.params.id);
        if (!user) return res.status(404).json({ msg: 'User not found' });

        user.isApproved = true;
        await user.save();

        res.json({ msg: 'User approved' });
    } catch (err) {
        res.status(500).send('Server error');
        console.log('Error :>> ', err);
    }
});

module.exports = router;
