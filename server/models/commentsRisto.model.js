module.exports = function defineCommentRistoModel(sequelize, Sequelize) {
    const attributes = {
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
            values: ['approved', 'pending','notApproved'],
            defaultValue: 'pending'
        },
    };
    const options = {
        timestamps: true
    }
    return sequelize.define("CommentRisto", attributes, options);
};
