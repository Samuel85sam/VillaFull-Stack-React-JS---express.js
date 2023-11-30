const jwt = require("jsonwebtoken");
const authService = require("../services/auth.service")
const tokenGeneratorService = {


    // {"id":4,
    // "nom":"nomTest",
    // "prenom":"prenomTest",
    // "adresse":"adresse test",
    // "tel":"0123456789",
    // "loginName":"login_test",
    // "hashedPassword":"$2b$10$R87QPimLo5Fv1.Q0S0X6K.RikkS2kRFgNOfVfHZ8fcfqJ3KRlqeXK",
    // "JWT":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImxvZ2luIjoibG9naW5fdGVzdCIsImlhdCI6MTcwMTM0MDY2NiwiZXhwIjoxNzAxNTEzNDY2fQ.tevQQAkh3n8R3osMk3UFTAX2_o6BoGVSBidaiZPYFGI"}

    CreateAndStoreJWT: (user) => {
        try {
            //console.log(`user============>${JSON.stringify(user)}`);
            const payload = {
                userId: user.id,
                login: user.loginName,
            };
            const options = {
                expiresIn: "2d",
            };
            const secret = process.env.JWT_SECRET;
            const token = jwt.sign(payload, secret, options);
            const userId = user.id
            if (token) {
                authService.addJwt(token, userId);
                console.log(`tokenGenerator ====> token: ${JSON.stringify(token)}`);
                return token
            } else { console.log('problème à la création du token!!!!!!!!!!!!!!!!!!!!!!!!!!!'); }
        }
        catch (error) {
            console.error(`TokenGenerator ERROR ===> ${error}`);
        };
    }

};
module.exports = tokenGeneratorService;





