const userDto = require("../DTO/user.dto");
const db = require("../models");
const jwt = require("jsonwebtoken");



const authService = {
  insert: async (data) => {
    console.log(` data dans service ===> ${JSON.stringify(data)}`);
    try {
      const user = await db.user.create(data);
      console.log(`user = ===>${user}`);
      return new userDto(user);
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur', error);
    }
  },

  exist: async (loginName) => {
    const user = await db.user.findOne({
      where: { loginName },
    });

    return new userDto(user);
  },
//! -------------------------------------------------------------------------------------
  addJwt: async (jwt, id) => {
    // Vérification de l'existence de l'utilisateur
    const userFound = await db.user.findOne({
      where: { id },
    });

    // S'il existe, on lui donne un jwt (s'il n'en a pas encore)
    const userUpdated = await userFound.update({ jwt });

    console.log(`userFound updated ===>${JSON.stringify(userUpdated)}`);

    return userUpdated;
  },

  getUserByToken: async (id) => {
    const jwtExist = await db.user.findOne({
      where: { id },
    });

    return jwtExist;
  },

  verifyJwt: async (token) => {
    const secret = process.env.JWT_SECRET;

    try {
      const decoded = jwt.verify(token, secret);
      return true;
    } catch (err) {
      return false;
    }
  },
//! ---------------------------------------------------------------------------------------
  // fetchAll: async () =>{
  //   const users = await db.user.
  // }
};

module.exports = authService;
