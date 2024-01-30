// Dependencies
const Sequelize = require('sequelize');

// Creates mySQL connection using Sequelize
// Include your MySQL user/password information
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('imagelist', 'Jili', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
    
  
    });

// Exports the connection for other files to use
module.exports = sequelize;