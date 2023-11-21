const { Sequelize, DataTypes, ModelStatic } = require('sequelize');

/**
 * Fonction pour créer un model Character (donc table de db)
 * Le JSDoc sert à l'autocomplétion
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    // Définition de l'object sequelize (db)
    const user = sequelize.define('user', {
        // L'id se crée automatiquement si non spécifié ici
        nom: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

        prenom: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        adresse: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        tel: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        mail: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        loginName: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        hashedPassword: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    }, {
        // Option de création propre à Sequelize (voir doc)
        createdAt: true,
        tableName: 'user',
        indexes: [
            {
                // Création de contraintes
                name: 'UK_user__loginName_mail',
                fields: ['loginName', 'mail'],
                unique: false,
            },
        ]
    })
    return user;
}