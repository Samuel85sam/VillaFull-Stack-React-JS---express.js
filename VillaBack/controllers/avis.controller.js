const avisValidator = require('../validators/avis.validator')
const avisService = require('../services/avis.service');
//const { diskStorage } = require('multer');

const avisController = {
    addAvis: async (req, res) => {
        // Récupération du formulaire
        const avisData = req.body;
        // Validation les informations récupérées depuis le formulaire
        const validatedData = await avisValidator.validate(avisData);
        // Destructuring des données vérifées
        const { firstName, lastName, comment, note } = validatedData;

        //!const { client, firstName, comment, note, date } = validatedData;
        // Envoi des données validées et hashées à la DB
        const avisInserted = await avisService.insert({ firstName, lastName, comment, note });

        //!const avisInserted = await avisService.insert({ client, firstName, comment, note, date });
        if (avisInserted) {
            res
                // On informe que l'insertion des données s'est correctement déroulée, et que l'avis est crée
                .status(201)
                .json(avisInserted);
          
        }
    },

    getAll: async (req, res) => {
        let allAvis = await avisService.fetchAll();
        if (allAvis) {
             res.status(200)
                .json(allAvis)
        }
    },
    getOne: async (req, res) => {
        let avisId = req.body
        //! comment recupèrer l'id au passage de la souris??
        let OneAvis = await avisService.fetchOne()
    },



}
module.exports = avisController;