const userDto = require("../DTO/user.dto");
const db = require("../models");
const jwt = require("jsonwebtoken");


const authService = {
  insert: async (data) => {
    try {
      const user = await db.user.create(data);
      return new userDto(user);
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur', error);
    }
  },

  exist: async (loginName) => {
    console.log(`loginName dans service.exist : ===>${loginName}`);
    const user = await db.user.findOne({
      where: { loginName },
    });
    console.log(`user dans auth.service.exist ===>${user}`);

    if (user === null) {
      return null
    }

    return new userDto(user);
  },

  getUserById: async (id) => {
    const user = await db.user.findOne({
      where: { id },
    });
    return user
  },

  verifyJwt: async (token) => {
    const secret = process.env.JWT_SECRET;
    try {
      const decoded = jwt.verify(token, secret);
      const userId = decoded.userId;
      const user = await db.user.findOne({
        where: {id:userId},
      })

      return new userDto(user);
    } catch (err) {
      console.log(`====> Verification Token FAIL!!!!!!!!!!!!!!!!! ===> ERROR: ${err}`);
      return false;
    }
  },

  addJwt: async (token, id) => {
    const userFound = await db.user.findOne({
      where: { id },
    });
    if (userFound) {
      db.user.update({ JWT: token }, { where: { id } });
      console.log(`JWT UPDATED IN DATABASE !!!!!!!`);
    } else {
      console.log('user not found!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    }
  },
};

module.exports = authService;
