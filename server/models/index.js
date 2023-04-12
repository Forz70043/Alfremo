const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.risto = require("./risto.model.js")(sequelize, Sequelize);
db.commentsRisto = require("./commentsRisto.model.js")(sequelize, Sequelize);
db.requests = require("../models/requests.model")(sequelize, Sequelize);



// Many-to-Many association to connect to the source to multiple targets
// A customer will certainly have a user role and his specialization - Example:
// Client admin = roles['user','admin']
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

// Ristoranti
db.risto.belongsTo(db.user, {
  constraints: true,
});
db.user.hasMany(db.risto);

db.commentsRisto.belongsTo(db.risto, {
  constraint: true, onDelete: "CASCADE"
});
db.risto.hasMany(db.commentsRisto)
//FINE Ristorianti


module.exports = db;