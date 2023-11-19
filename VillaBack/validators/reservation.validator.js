const yup = require('yup');
const { object } = require('yup');

const reservationValidator = object({
    firstName: yup.string().min(1).max(50).required(),
    lastName:  yup.string().min(1).max(50).required(),
    dateIn: yup.string().min(1).max(50).required(),
    dateOut: yup.string().min(1).max(50).required(),
    mail:   yup.string().min(1).max(50).required(),
    residentQty: yup.string().min(1).max(50).required(),
    })

module.exports = reservationValidator;