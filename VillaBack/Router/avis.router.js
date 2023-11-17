
const avisController = require('../controllers/avis.controller');
const avisRouter = require('express').Router();

avisRouter.route('/POST')
.post(avisController.addAvis)
.all((res,req) => {
    res.statusCode(405).send('Login Unavalable')
});

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