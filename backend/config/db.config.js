require('dotenv').config(); 

// Gère la connection à la BDD MySQL, connection accessible via exportation.
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Inthedeathcar34",
    DB: "groupomania",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };