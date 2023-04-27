const { Sequelize } = require('sequelize');

const db = new Sequelize('oqvest', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

db.authenticate().then(()=> {
    console.info('Db connection successfull...');
}).catch((error)=> {
    console.error('Db not connected: ' + error);
})

module.exports = db;