const reservationValidator = require('../validators/reservation.validator')
const reservationService = require('../services/reservation.service');
//const { diskStorage } = require('multer');

const reservationController = {
    addResa: async (req, res) => {
        const resaData = req.body;
 

        const validatedData = await reservationValidator.validate(resaData);
        // Destructuring des données vérifées
        const { firstName, lastName, dateIn, dateOut, mail, residentQty } = validatedData;

        const resaInserted = await reservationService.insert({ firstName, lastName, dateIn, dateOut, mail, residentQty });

        if (resaInserted) {
            res
                .status(201)
                .json(resaInserted);
                }
    },
}
module.exports = reservationController;