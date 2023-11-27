// Importation l'object Sequelize
const { Sequelize } = require("sequelize");

// Initilisation une nouvelle instance de l'object avec SQLite en paramètre
let sequelize;
if (process.env.NODE_ENV === "test") {
  sequelize = new Sequelize("sqlite::memory", {
    //disable login; default: console.log
    logging: false,
  });
} else {
  sequelize = new Sequelize({
    dialect: "mssql",
    database: "VillaKollo",
    // sur la VDI c'est :VillaKollo
    // sur le laptop c'est :Villa
    username: "VillaKolloUser",
    // sur la VDI c'est : VillaKolloUser
    // sur le laptop c'est : KolloAdmin
    password: process.env.DB_PASSWORD,
    host: "localhost",
    port: 1433, // Le port de base de SQL Server
  });
}
// Création de l'object db
const db = {};
module.exports = db;
//!↓↓↓ pas sûr de comprendre
db.sequelize = sequelize;
db.Sequelize = Sequelize;
//! ↑↑↑ pas sûr de comprendre???
// Ajout des models
db.user = require("./user.model")(sequelize);
db.client = require("./client.model")(sequelize);
db.avis = require("./avis.model")(sequelize);
db.reservation = require("./reservation.model")(sequelize);

//db.photo = require('./photo.model')(sequelize);
