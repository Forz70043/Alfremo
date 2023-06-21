module.exports = function defineUserModel(sequelize, Sequelize) {
  const attributes = {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    avatar: {
      type: Sequelize.BLOB
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
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
    hash: {
      type: Sequelize.STRING,
      allowNull: false
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
    }
  };

  const options = {
    defaultScope: {
      // exclude password hash by default
      attributes: { exclude: ['hash'] }
    },
    scopes: {
      // include hash with this scope
      withHash: { attributes: {} }
    }
  };

  return sequelize.define("User", attributes, options);
};
