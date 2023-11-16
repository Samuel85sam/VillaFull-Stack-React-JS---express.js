
const avisController = require('../controllers/avis.controller');
const avisRouter = require('express').Router();
// !Error: Route.post() requires a callback function but got a [object Undefined]
// !    at Route.<computed> [as post] (C:\Users\samue\Desktop\Villa\VillaBack\node_modules\express\lib\router\route.js:211:15)
// !    at Object.<anonymous> (C:\Users\samue\Desktop\Villa\VillaBack\Router\avis.router.js:12:2)
// !    at Module._compile (node:internal/modules/cjs/loader:1256:14)
// !    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
// !    at Module.load (node:internal/modules/cjs/loader:1119:32)
// !    at Module._load (node:internal/modules/cjs/loader:960:12)
// !    at Module.require (node:internal/modules/cjs/loader:1143:19)
// !    at require (node:internal/modules/cjs/helpers:121:18)
// !    at Object.<anonymous> (C:\Users\samue\Desktop\Villa\VillaBack\Router\router.js:1:20)
// !    at Module._compile (node:internal/modules/cjs/loader:1256:14)
//!↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// avisRouter.route('/POST')
// .post(avisController.addAvis)
// .all((res,req) => {
//     res.statusCode(405).send('Login Unavalable')
// });

// avisRouter.route('/EDIT')
// .post(avisController.register)
// .all((res,req)=> {
//     res.statusCode(405).send('Unavailable')
// });

// avisRouter.route('/DELETE')
// .post(avisController.getAllUsers)
// .all((res,req)=> {
//     res.statusCode(405).send('Unavailable')
// });

// avisRouter.route('/GETALL')
// .post(avisController.getAll)
// .all((res,req)=> {
//     res.statusCode(405).send('Unavailable')
// });

// avisRouter.route('/GETONE')
// .post(avisController.getOne)
// .all((res,req)=> {
//     res.statusCode(405).send('Unavailable')
// });

module.exports = avisRouter;