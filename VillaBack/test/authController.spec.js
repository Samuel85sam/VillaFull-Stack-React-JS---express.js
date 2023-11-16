const app = require('../server');    
const db = require('../models');  
// Permet d'utiliser l'API Should de "Chai" - OBLIGATOIRE
const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe } = require('../validators/avis.validator');
const { authDto } = require('../DTO/user.dto')
const should = chai.should();
// Permet de lancer des requetes vers le server
chai.use(chaiHttp);

//Character de tests - fixtures
const newUser1 =   { id: 1, login: 'UserTest1', hashedPassword: 'hashedPasswordTest1' 
    };
const newUser2 =  { id: 2, login: 'UserTest2', hashedPassword: 'hashedPasswordTest2' 
};

describe('User Controller', () => {
    before(async () => {
        await db.sequelize.sync({ force: true });        
        await  db.users.create(newUser1);
        await db.users.create(newUser2); 
    });

    
    after(() => {

        
    });
    it('should get one User', (done) => {
        chai.request(app)
            .get('/api/character')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(2);
                done();
            });
    });
})