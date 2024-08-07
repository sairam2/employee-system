const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artworks = sequelize.define('Artworks', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }, 
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true
});

// class Artworks extends Model { }

// Artworks.init({
//     name: DataTypes.STRING,
//     userId: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: 'Users',
//             key: 'id',
//         }
//     },
// }, { sequelize, modelName: 'Artworks' });


sequelize.sync({ alter: true })
    .then(() => console.log('Artwork table created'))
    .catch(err => console.log('Error: ' + err));

module.exports = Artworks;
