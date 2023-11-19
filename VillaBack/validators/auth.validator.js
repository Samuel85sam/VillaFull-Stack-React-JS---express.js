const yup = require('yup');
const { object } = require('yup');

const authValidator = object({
    nom: yup.string().min(1).max(50).required(),
    prenom: yup.string().min(1).max(50).required(),
    adresse: yup.string().min(1).max(50).required(),
    tel: yup.string().min(1).max(50).required(),
    email: yup.string().min(1).max(50).required(),
    login: yup.string().min(1).max(50).required(),
    password: yup.string().min(1).max(50).required(),
})

module.exports = authValidator;