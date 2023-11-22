class userDto {
    id;
    nom;
    prenom;
    adresse;
    tel;
    email;
    loginName;
    hashedPassword;

    constructor(data) {
        this.id = data.id
        this.nom = data.nom
        this.prenom = data.prenom
        this.adresse = data.adresse
        this.tel = data.tel
        this.email = data.email
        this.loginName = data.loginName
        this.hashedPassword = data.hashedPassword
    }
}

module.exports = userDto;