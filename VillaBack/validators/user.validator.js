const yup = require('yup');
const { object } = require('yup');

const userValidator = object({
    nom: yup.string().min(1).max(50).required(),
    prenom: yup.string().min(1).max(50).required(),
    adresse: yup.string().min(1).max(50).required(),
    tel: yup.string().min(1).max(50).required(),
    mail: yup.string().min(1).max(50).required(),
    loginName: yup.string().min(1).max(50).required(),
    password: yup.string().min(1).max(60).required(),
})

module.exports = userValidator;