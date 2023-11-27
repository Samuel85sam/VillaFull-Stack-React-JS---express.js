const authController = require('../controllers/auth.controller');
const authRouter = require('express').Router();

authRouter.route('/LOGIN')
    .post(authController.login)
    .all((res, req) => {
        res.statusCode(405).send('Login Unavalable')
    });

authRouter.route('/REGISTER')
    .post(authController.register)
    .all((res, req) => {
        res.statusCode(405).send('Unavailable')
    });
authRouter.route('/:id')
    .post(authController.getUserById)
    .all((res,req) =>{
        res.statusCode(405).send('Unavalable')
    })

// authRouter.route('/users')
// .post(authController.getAllUsers)
// .all((res,req)=> {
//     res.statusCode(405).send('Unavailable')
// });


module.exports = authRouter;