const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('employee_system', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log // Enable logging
    // logging: false
});

// const Users = require('../models/Users')(sequelize, DataTypes);
// const Artworks = require('../models/Artworks')(sequelize, DataTypes);

// Artworks.belongsTo(Users, { foreignKey: 'userId' });
// Users.hasMany(Artworks, { foreignKey: 'userId' });

sequelize.authenticate()
    .then(() => console.log('MySQL Database connected...'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
