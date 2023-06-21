const withPWA = require("next-pwa");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    dbConfig: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      port: process.env.DB_PORT,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      dialect: process.env.DB_DIALECT,
      pool: {
        max: 9900,
        min: 0,
        acquire: 990000,
        idle: 10000
      }
    },
    secret: process.env.SECRET_KEY,
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api' // development api
      : 'http://localhost:3000/api' // production api
  }
}

module.exports = nextConfig
/*
module.exports = withPWA({
  pwa:{
    dest:"public",
    register:true,
    skipWaiting:true,
    //disable:process.env.NODE_ENV === 'development'
  }
})*/
