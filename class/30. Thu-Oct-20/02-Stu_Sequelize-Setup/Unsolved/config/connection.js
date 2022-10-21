const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(
  PROCCESS.ENV.DB_NAME,
  PROCCESS.ENV.DB_USER,
  PROCCESS.ENV.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
