const yup = require('yup');
const { object } = require('yup');

const avisValidator = object({
    //client: yup.string().min(1).max(50).required(),//!
    firstName: yup.string().min(1).max(50).required(),
    lastName:  yup.string().min(1).max(50).required(),
    comment:   yup.string().min(0).max(500).required(),
    note:      yup.string().min(1).max(1).required(),//!string ==> number
    //date: yup.date()//! 
})

module.exports = avisValidator;