const { Sequelize } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Event = require('./Event');

// Определяем связи между моделями
User.hasMany(Event, { foreignKey: 'createdBy' });
Event.belongsTo(User, { foreignKey: 'createdBy' });

module.exports = {
    sequelize,
    User,
    Event
};