const {avisDto,avisDetailDto}  = require('../DTO/avis.dto');
const db = require('../models');

const avisService = {

    insert: async (data) => {
        const avis = await db.avis.create(data)
        return new avisDetailDto(avis)
    },

    fetchAll: async () => {
        const avis = await db.avis.findAll();
        console.log(`db.avis.findAll ===>${avis.map(comments => comments.toJSON())}`);
        return avis.map(comments => new avisDto(comments));
    },

    // fetchAll: async () => {
    //     const avis = await db.avis.findAll();
    //     console.log(`db.avis.findAll ===>${avis.map(comments => comments)}`);
    //     return avis.map(comments => new avisDto(comments));
    // },

    fetchOne: async (id) => {
        const avis = await db.avis.findOne({
            where: { id } // --> { id: id }
        });

        return new avisDetailDto(avis);
    },

    // Exemple de fetch plus détaillé
    // fetchFun: async () => {
    //     const avis = await db.Character.findAll({
    //         where: db.Sequelize.or(
    //             {
    //                 firstname: {
    //                     [Op.like]: 'John'
    //                 }
    //             },
    //             {
    //                 firstname: {
    //                     [Op.like]: 'Jacqouille'
    //                 }
    //             }
    //         )
    //     });

    //     return characters.map(char => new CharacterDTO(char))
    // },



    delete: async (id) => {
        const nbRowDeleted = await db.avis.destroy({
            where: { id } // --> { id: id }
        });

        return nbRowDeleted === 1;
    }
}

module.exports = avisService