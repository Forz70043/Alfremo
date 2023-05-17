module.exports = function defineRistoModel(sequelize, Sequelize) {
    const attributes = {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING           // VARCHAR(255)
        },
        address: {
            type: Sequelize.STRING
        },
        owner: {
            type: Sequelize.INTEGER,
        },
        image: {
            type: Sequelize.BLOB
        }
    };
    const options = {
        timestamps: true
    }
    return sequelize.define("Risto", attributes, options);
};
