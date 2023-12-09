const tokenGeneratorService = require("../services/TokenGenerator.service")
const userValidator = require("../validators/user.validator");
const bcrypt = require("bcrypt");
const authService = require("../services/auth.service");

const authController = {
  register: async (req, res) => {
    const authData = req.body;
    const validatedData = await userValidator.validate(authData);
    console.log(`validateData dans authController ==> ${validatedData} stringified ==> ${JSON.stringify(validatedData)}`);//!LOG
    if (validatedData) {
      const { password } = validatedData;
    const hashedPassword = bcrypt.hashSync(password, 10);
    validatedData.hashedPassword = hashedPassword;
    delete validatedData.password;
    }
    const authInserted = await authService.insert(validatedData);
    console.log(`authInserted dans authController ==> ${authInserted} stringified ==> ${JSON.stringify(authInserted)}`);//!LOG

    try {
      if (authInserted) {
        res.status(201)
          .location(`api/auth/REGISTER`)
          .json(authInserted);
      }
    } catch (err) {
      console.log(res.status.txt);
      console.error(err);
      //res.sendStatus(404); //TODO: retour err.status ==> gestion dataInsert fail
      // res.status(401)
      // .location(`api/auth/REGISTER`)
      // .json(err);
      console.log(`err dans authservice.insert ==> ${err} stringified ==> ${JSON.stringify(err)}`);//!LOG

      return res.status(401)
                .location(`api/auth/REGISTER`)
                .json(err);
    }
  },

  login: async (req, res) => {

    const { loginName, password } = req.body;
    const user = await authService.exist(loginName);

    try {

      if (user === null) {
        console.log("auth.service npm run dev ===> USER NOT FOUND");
        return res.status(401).json({ message: "USER NOT FOUND" });
      } else {
        const hashedPassword = user.hashedPassword
        const passwordMatch = await bcrypt.compare(password, hashedPassword);
        if (!passwordMatch) {
          alert('The server refuses the attempt to brew coffee with a teapot.')
          console.log('The server refuses the attempt to brew coffee with a teapot.');
          return res.status(418)
          //? return res.status(401).json({ message: "Mot de passe incorrect" });
        };
        const token = tokenGeneratorService.CreateAndStoreJWT(user)
        if (token) {
          res.setHeader("Authorization", `Bearer ${token}`);
          return res.status(200).json({ token, user });
        } else {
          console.log(`TOKEN=========> ${JSON.stringify(token)}`);
          console.error(`No User For TokenGeneratorService===> user===> ${JSON.stringify(user)}`)
        }
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
        return res.json(user).status(200)

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

