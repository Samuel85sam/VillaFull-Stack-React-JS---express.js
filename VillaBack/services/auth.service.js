const userDto = require("../DTO/user.dto");
const db = require("../models");
//!↑↑↑ pourquoi pas : require('../model/index')???
const jwt = require("jsonwebtoken");

const authService = {
  insert: async (data) => {
    //console.log(`db ===========================================================> `,db);
    //!↑↑↑ comment db est il accessible???
    const user = await db.user.create(data);
    return new userDto(user);
  },

  exist: async (login) => {
    console.log(`login sended ===>${login}`);
    const user = await db.user.findOne({
      where: { login },
    });

    return new userDto(user);
  },
  addJwt: async (jwt, id) => {
    // Vérification de l'existence de l'utilisateur
    const userFound = await db.user.findOne({
      where: { id },
    });
    // S'il existe, on lui donne un jwt (s'il n'en a pas encore)
    await userFound.update({ jwt });

    return userFound;
  },

  getJwt: async (id) => {
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

  // fetchAll: async () =>{
  //   const users = await db.user.
  // }
};

module.exports = authService;
