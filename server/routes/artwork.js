const express = require('express');
const jwt = require('jsonwebtoken');
const Artworks = require('../models/Artworks');
const Users = require('../models/Users');
const router = express.Router();
const Sequelize = require('sequelize');
const { Op } = Sequelize;
const { isDate, getStartAndEndOfCurrentDay } = require('../util/utilities');

router.post('/create', async (req, res) => {
    const { body: { name }, user: { id: userId } } = req;
    try {
        if (userId <= 0 || name.trim().length === 0) 
            return res.status(400).json({ msg: 'Invalid input params. UserId and Name is mandatory' });

        const data = await Artworks.create({ userId, name });
        res.status(201).json({ msg: 'Artwork created successfully.', data });
    } catch (err) {
        res.status(500).send('Server error');
        console.log('Error :>> ', err);
    }
});

router.get('/all', async (req, res) => {
    try {
        const artworks = await Artworks.findAll();
        res.json(artworks);
    } catch (err) {
        res.status(500).send('Server error');
        console.log('Error :>> ', err);
    }
});

router.get('/artpieces', async (req, res) => {
    const { from, to } = req.query;
    try {
        const { startOfDay, endOfDay } = getStartAndEndOfCurrentDay();
        const fromDate = isDate(from) ? from : startOfDay;
        const toDate = isDate(to) ? to : endOfDay;
        console.log('fromDate, toDate :>> ', fromDate, toDate);
        const artworks = await Artworks.findAll({
            where: {
                createdAt: {
                    [Op.between]: [fromDate, toDate]
                }
            },
            attributes: [
                [Sequelize.fn('DATE', Sequelize.col('createdAt')), 'date'],
                [Sequelize.fn('COUNT', Sequelize.col('id')), 'count']
            ],
            group: ['date']
        });
        res.json(artworks);
    } catch (err) {
        res.status(500).send('Server error');
        console.log('Error :>> ', err);
    }
});

router.get('/employeeproduction', async (req, res) => {
    try {
        const production = await Artworks.findAll({
            attributes: [
                [Sequelize.fn('DATE', Sequelize.col('createdAt')), 'date'],
                [Sequelize.fn('COUNT', Sequelize.col('id')), 'count']
            ],
            group: ['date']
        });
        res.json(production);
    } catch (err) {
        res.status(500).send('Server error');
        console.log('Error :>> ', err);
    }
});

module.exports = router;
