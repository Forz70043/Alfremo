module.exports = (sequelize, Sequelize) => {
    const CommentRisto = sequelize.define("comments_risto", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: Sequelize.STRING
        },
        text: {
            type: Sequelize.STRING           // VARCHAR(255)
        },
        status: {
            type: Sequelize.ENUM,
            values: ['approved', 'pending'],
            defaultValue: 'pending'
        },
    });

    return CommentRisto;
};
