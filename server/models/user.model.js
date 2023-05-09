module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    avatar: {
      type: Sequelize.BLOB
    },
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    terms: {
      type: Sequelize.STRING
    },
    bornOn: {
      type: Sequelize.DATE,             //DATETIME for mysql / sqlite, TIMESTAMP WITH TIME ZONE for postgres
    },
    status: {
      type: Sequelize.ENUM,
      values: ['online', 'offline'],
      defaultValue: 'offline'
    },
    checkemail: {
      type: Sequelize.ENUM,
      values: ['active', 'notActive'],
      defaultValue: 'notActive'
    },
  });

  return User;
};
