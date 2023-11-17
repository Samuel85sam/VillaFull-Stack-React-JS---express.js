class reservationDto {

    id;
    dateIn;
    dateOut;
    client;


    constructor(data) {
        this.id = data.id;
        this.dateIn = data.dateIn;
        this.dateOut = data.dateOut;
        this.client = data.client;
    }
}

class reservationDetailDto {

    id;
    firstName;
    LastName
    dateIn;
    dateOut;
    mail;
    residentQty;


    constructor(data) {
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.dateIn = data.dateIn;
        this.dateOut = data.dateOut;
        this.mail = data.mail;
        this.residentQty = data.residentQty;
    }
}

module.exports = { reservationDto, reservationDetailDto };