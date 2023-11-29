const userValidator = require("../validators/user.validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authService = require("../services/auth.service");

const authController = {
  register: async (req, res) => {
    // Récupération des données utilsateur
    const authData = req.body;
    // Validation les informations récupérées depuis les données utilisateur
    const validatedData = await userValidator.validate(authData);
    // Récupération du mot de passe non haché
    const { password } = validatedData;
    // Hachage du mot de passe
    const hashedPassword = bcrypt.hashSync(password, 10);
    // Ajout de la propriété hashedPassword à l'objet validatedData
    validatedData.hashedPassword = hashedPassword;
    // Suppression de la propriété password (si elle n'est plus nécessaire)
    delete validatedData.password;
    // Envoi des données validées et hashées à la DB
    const authInserted = await authService.insert(validatedData);

    try {
      if (authInserted) {
        // On informe que l'insertion des données s'est correctement déroulée, et que le compte est crée
        res.status(201)
          // On redirige les informations utilisateur sur la route login (ne pas oublier de gérer la redirection dans le front)
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
    try {
      const { loginName, password } = req.body;
      // Vérification de l'existence de l'utilisateur via son login
      const user = await authService.exist(loginName);
      if (!user) {
        // Si l'utilisateur n'existe pas, renvoi une réponse 401 (Unauthorized)
        console.log(" ===> USER NOT FOUND");
        return res.status(401).json({ message: "USER NOT FOUND" });
      }
      // Vérification du password fourni par l'utilisateur avec le password hashé dans la DB
      const hashedPassword = user.hashedPassword
      const passwordMatch = await bcrypt.compare(password, hashedPassword);
      if (!passwordMatch) {
        // Si les mots de passe ne correspondent pas, renvoi une réponse 401 (Unauthorized)
        alert('The server refuses the attempt to brew coffee with a teapot.')
        console.log('The server refuses the attempt to brew coffee with a teapot.');
        return res.status(418)

        //? return res.status(401).json({ message: "Mot de passe incorrect" });
      }
      //*------------------------JWT-----------------------------------------------*//
      // Si les password correspondent, on va créer un token (jwt) pour l'utilisateur
      const payload = {
        userId: user.id,
        login: user.loginName,
      };
      const options = {
        expiresIn: "2d",
      };
      // Signer le token (jwt) avec le SECRET
      const secret = process.env.JWT_SECRET;
      const token = jwt.sign(payload, secret, options);
      const userId = user.id
      //insertion dans la DB
      const clientJwt = await authService.addJwt(token, userId);
      if (clientJwt) {
        console.log(`token créé =======> ${token}`);
        // Si l'insertion s'est correctement déroulée, on envoi les informations dans le header et au front en json
        res.setHeader("Authorization", `Bearer ${token}`);//! ← où dans le header?  c'est quoi Bearer? pourquoi "authorization"?
        return res.status(200).json({ token, user });
      }
    } catch (err) {
      console.error(err);
      res.sendStatus(404);
    }
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
    const user = await auth.service.exist(loginName)
  }




};

module.exports = authController;

