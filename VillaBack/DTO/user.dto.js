class userDto {
    id;
    nom;
    prenom;
    adresse;
    tel;
    email;
    loginName;
    password;

    constructor(data) {
        this.id
        this.nom = data.nom
        this.prenom = data.prenom
        this.adresse = data.adresse
        this.tel = data.tel
        this.email = data.email
        this.loginName = data.loginName
        this.password = data.password
    }
}

module.exports = userDto;