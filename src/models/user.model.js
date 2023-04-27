const db = require('../utilities/dbConfig');
const { Model, DataTypes } = require('sequelize');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    }
}, {
    sequelize: db,
    modelName: 'users'
});

module.exports = User;