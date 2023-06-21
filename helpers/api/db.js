import getConfig from 'next/config';
import mysql from 'mysql2/promise';
import { Sequelize } from 'sequelize';

const { serverRuntimeConfig } = getConfig();
const { host, port, user, password, database, dialect, pool } = serverRuntimeConfig.dbConfig;

//createSequelize instance
const sequelize = new Sequelize(database, user, password,
    {
        host: host,
        dialect: dialect,
        operatorsAliases: false,
        pool: {
            max: pool.max,
            min: pool.min,
            acquire: pool.acquire,
            idle: pool.idle
        },
        logging: false
    }
);

async function connect() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

async function closeConnection() {
    try {
        await sequelize.close();
        console.log('Connection has been closed successfully.');
    } catch (error) {
        console.error('Unable to close connection to the database:', error);
    }
}

async function createRoles() {
    //ROLES
    try {
        await db.Role.create({ id: 1, name: "user" });
        await db.Role.create({ id: 2, name: "restaurateur" });
        await db.Role.create({ id: 3, name: "worker" });
        await db.Role.create({ id: 99, name: "admin" });
    } catch(e) {
        console.log("Error on create roles: ", e);
    }
};

// initialize db and models, called on first api request from /helpers/api/api-handler.js
async function initialize() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    // sync all models with database
    await sequelize.sync({ alter: false });    
    // force sync models with database
    //await sequelize.sync({ force: true });
    db.initialized = true;
}

export const db = {
    initialized: false,
    initialize,
    sequelize,
    connect,
    closeConnection,
    User: require("../../server/models/user.model.js")(sequelize, Sequelize),
    Role: require("../../server/models/role.model.js")(sequelize, Sequelize),
    Risto: require("../../server/models/risto.model.js")(sequelize, Sequelize),
    CommentsRisto: require("../../server/models/commentsRisto.model.js")(sequelize, Sequelize),
    Notification: require("../../server/models/notification.model.js")(sequelize, Sequelize),
    Event: require("../../server/models/event.model.js")(sequelize, Sequelize),
    Request: require("../../server/models/request.model.js")(sequelize, Sequelize)
};