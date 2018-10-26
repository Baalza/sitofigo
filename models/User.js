// Importo le dipendenze del modello utente
const database = require('../configs/database_configuration').database;
const sequelize = require('sequelize');

// Entità Utente
const User = database.define('user', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: sequelize.STRING,
        allowNull: false
    },
    address: {
        type: sequelize.STRING,
        allowNull: false
    }
    
    
});

module.exports = User;