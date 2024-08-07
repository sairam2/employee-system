const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../models/Users');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { username: name, email, password } = req.body;
    try {
        let user = await Users.findOne({ where: { email } });
        if (user) return res.status(400).json({ msg: 'User already exists' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = await Users.create({ name, email, password: hashedPassword });

        res.status(201).json({ msg: 'Registration successful. Awaiting admin approval.' });
    } catch (err) {
        res.status(500).send('Server error');
        console.log('Error :>> ', err);
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Users.findOne({ where: { email } });
        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        if (user.isApproved === false) {
            return res.status(401).json({ msg: 'User is not approved to login' });
        }

        const payload = { user: { id: user.id, isAdmin: user.isAdmin, isApproved: user.isApproved } };
        const token = jwt.sign(payload, 'secret', { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        res.status(500).send('Server error');
        console.log('Error :>> ', err);
    }
});

router.post('/logout', (req, res) => {
    res.status(200).json({ msg: 'Logout successful' });
});

module.exports = router;
