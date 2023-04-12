require('dotenv').config(); // this is important!

module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASS,
    DB: process.env.DB_NAME,
    dialect: "mysql",
    pool: {
      max: 9900,
      min: 0,
      acquire: 990000,
      idle: 10000
    }
  };