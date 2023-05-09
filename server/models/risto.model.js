module.exports = (sequelize, Sequelize) => {
    const Risto = sequelize.define("ristos", {
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
        address:{
            type: Sequelize.STRING
        },
        owner:{
            type: Sequelize.INTEGER,
        },
        image: {
            type: Sequelize.BLOB
        }
    },
    { 
        timestamps: true }
    );

    return Risto;
};
