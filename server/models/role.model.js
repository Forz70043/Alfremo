module.exports = function defineRoleModel(sequelize, Sequelize) {
  const attributes = {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  };

  return sequelize.define("Role", attributes);
};