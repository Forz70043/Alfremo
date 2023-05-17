import getConfig from 'next/config';
import mysql from 'mysql2/promise';
import { Sequelize, DataTypes } from 'sequelize';

const { serverRuntimeConfig } = getConfig();

export const db = {
    initialized: false,
    initialize
};

// initialize db and models, called on first api request from /helpers/api/api-handler.js
async function initialize() {
    // create db if it doesn't already exist
    const { host, port, user, password, database, dialect, pool } = serverRuntimeConfig.dbConfig;

    try {
        const connection = await mysql.createConnection({ host, port, user, password });
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
    } catch (error) {
        console.log(error);
    }

    // connect to db
    const sequelize = new Sequelize(
        database,
        user,
        password,
        {
            host: host,
            dialect: dialect,
            operatorsAliases: false,
            pool: {
                max: pool.max,
                min: pool.min,
                acquire: pool.acquire,
                idle: pool.idle
            }
        }
    );

    // init models and add them to the exported db object
    db.User = require("../../server/models/user.model.js")(sequelize, Sequelize);
    db.Risto = require("../../server/models/role.model.js")(sequelize, Sequelize);
    db.Risto = require("../../server/models/risto.model.js")(sequelize, Sequelize);
    db.CommentsRisto = require("../../server/models/commentsRisto.model.js")(sequelize, Sequelize);


    // /** RUOLI */
    // await db.Risto.create({ id: 1, name: "ristoratore" });
    // await db.Risto.create({ id: 2, name: "worker" });
    // await db.Risto.create({ id: 99, name: "admin" });
    // /** FINE RUOLI */

    // // Many-to-Many association to connect to the source to multiple targets
    // // A customer will certainly have a user role and his specialization - Example:
    // // Client admin = roles['user','admin']
    // db.Risto.belongsToMany(db.User, {
    //     through: "user_role",
    //     foreignKey: "roleId",
    //     otherKey: "userId"
    // });

    // db.User.belongsToMany(db.Risto, {
    //     through: "user_role",
    //     foreignKey: "userId",
    //     otherKey: "roleId"
    // });

    // // Ristoranti
    // db.Risto.belongsTo(db.User, {
    //     constraints: true,
    // });
    // db.User.hasMany(db.Risto);

    // db.CommentsRisto.belongsTo(db.Risto, {
    //     constraint: true, onDelete: "CASCADE"
    // });
    // db.Risto.hasMany(db.CommentsRisto);
    // //FINE Ristorianti


    // sync all models with database
    await sequelize.sync({ alter: true });
    //await sequelize.sync({force: true });

    db.initialized = true;
}