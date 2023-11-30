const tokenGeneratorService = require("../services/TokenGenerator.service")
const userValidator = require("../validators/user.validator");
const bcrypt = require("bcrypt");
const authService = require("../services/auth.service");

const authController = {
  register: async (req, res) => {
    const authData = req.body;
    const validatedData = await userValidator.validate(authData);
    const { password } = validatedData;
    const hashedPassword = bcrypt.hashSync(password, 10);
    validatedData.hashedPassword = hashedPassword;
    delete validatedData.password;
    const authInserted = await authService.insert(validatedData);
    try {
      if (authInserted) {
        res.status(201)
          .location(`api/auth/REGISTER`)
          .json(authInserted);
      }
    } catch (err) {
      console.log(res.status.txt);
      console.error(err);
      res.sendStatus(404);
    }
  },

  login: async (req, res) => {
    const { loginName, password } = req.body;
    const user = await authService.exist(loginName);
    const hashedPassword = user.hashedPassword
    const passwordMatch = await bcrypt.compare(password, hashedPassword);
    try {
      if (!user) {
        console.log(" ===> USER NOT FOUND");
        return res.status(401).json({ message: "USER NOT FOUND" });
      };
      if (!passwordMatch) {
        alert('The server refuses the attempt to brew coffee with a teapot.')
        console.log('The server refuses the attempt to brew coffee with a teapot.');
        return res.status(418)
        //? return res.status(401).json({ message: "Mot de passe incorrect" });
      };
      const token = tokenGeneratorService.CreateAndStoreJWT(user)
      if (token) {
        return res.status(200).json({ token, user });
      } else {
        console.log(`TOKEN=========> ${token}`);
        console.error(`No User For TokenGeneratorService===> user===> ${JSON.stringify(user)}`)
      }
    } catch (err) {
      console.error(err);
      res.sendStatus(404);
    };
  },

  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await authService.getUserById(id);
      if (user) {
        return res.json(JSON.stringify(user)).status(200)
      }
    } catch (error) {
      console.log(`getUserById FAIL ====> ${error}`);
    }
  },

  getUserByLogin: async (res, req) => {
    const user = await authService.exist(loginName)
  }
};

module.exports = authController;

