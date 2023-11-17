const reservationValidator = require('../validators/avis.validator')
const reservationService = require('../services/avis.service');
//const { diskStorage } = require('multer');

const reservationController = {
    addResa: async (req, res) => {
        const resaData = req.body;
        console.log('req.body ===> ↓↓↓');
        console.log(req.body);

        const validatedData = await reservationValidator.validate(resaData);
        // Destructuring des données vérifées
        const { firstName, lastName, dateIn, dateOut, mail, residentQty } = validatedData;

        const resaInserted = await reservationService.insert({ firstName, lastName, dateIn, dateOut, mail, residentQty });

        if (resaInserted) {
            res
                .status(201)
                .json(resaInserted);
                console.log(`firstName ==>  ${firstName}`);
                console.log(`lastName ==>  ${lastName}`);
                console.log(`dateIn ==>  ${dateIn}`);
                console.log(`dateOut ==>  ${dateOut}`);
                console.log(`mail ==>  ${mail}`);
                console.log(`residentQty ==>  ${residentQty}`);
                }
    },
}
module.exports = reservationController;