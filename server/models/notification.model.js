module.exports = function defineNotificationModel(sequelize, Sequelize) {
    const attributes = {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: Sequelize.STRING
        },
        txt: {
            type: Sequelize.STRING           // VARCHAR(255)
        },
        status: {
            type: Sequelize.ENUM,
            values: ['read', 'unread'],
            defaultValue: 'unread'
        },
    };
    const options = {
        timestamps: true
    }
    return sequelize.define("Notification", attributes, options);
};
