class userDto {

    nom;
    prenom;
    adresse;
    tel;
    email;
    loginName;
    HashedPassword;

    constructor(data) {
        this.nom = data.nom
        this.prenom = data.prenom
        this.adresse = data.adresse
        this.tel = data.tel
        this.email = data.email
        this.loginName = data.login
        this.HashedPassword = data.password
    }
}

module.exports = userDto;