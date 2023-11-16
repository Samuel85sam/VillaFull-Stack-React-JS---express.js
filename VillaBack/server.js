// Importation du module 'dotenv' pour charger les variables d'environnement depuis un fichier .env
require('dotenv').config();

// Importation du module 'express' pour la création du serveur web
const express = require('express');
// Importation du module 'express-async-errors' pour gérer les erreurs asynchrones de manière plus propre
require('express-async-errors');

// Importation du module 'cors' pour gérer les requêtes CORS (Cross-Origin Resource Sharing)
const cors = require('cors');

// Importation du module contenant les routes définies
const router = require('./Router/router');

// Extraction des variables d'environnement (PORT, NODE_ENV) depuis le fichier .env
const { PORT, NODE_ENV } = process.env; //← dotenv

// Importation du module 'db' qui semble contenir la configuration de la base de données Sequelize
const db = require('./models');

// Vérification de la connexion à la base de données
db.sequelize.authenticate()
    .then(() => console.log('==> Connexion DB ok!'))
    .catch((error) => console.log(`==> Connection DB foirée!!!${error}`));

// Si l'environnement est en mode développement, synchroniser la base de données avec les modèles Sequelize
if (NODE_ENV === 'development') {
    db.sequelize.sync({ alter: { drop: false } });
};// ← migration DB

// Création du serveur web en utilisant Express
const app = express();

// Activation du middleware 'cors' pour gérer les requêtes CORS
app.use(cors());

// Activation du middleware pour parser les données au format JSON
app.use(express.json());

// Ajout du routing avec une base URL '/api' pour respecter le principe RESTful
app.use('/api', router);

// Écoute du serveur sur le port spécifié dans les variables d'environnement
app.listen(PORT, () => {
    console.log(`==> Web server running on port ${PORT}`);
});

// Exportation du serveur API (nécessaire pour les tests)
module.exports = app;


