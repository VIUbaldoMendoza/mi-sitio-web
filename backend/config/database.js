const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('data_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;
