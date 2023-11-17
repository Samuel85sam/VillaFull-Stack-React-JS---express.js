class avisDto {

    id;
    //!client;
    firstname;
    lastname;
    comment;
    note;
    //!date;

    constructor(data) {
        this.id = data.id;
        //!this.client = data.client;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.comment = data.comment;
        this.note = data.note;
        //!this.date = data.date;
    }
}

// class avisDto {

//     id;
//     client;
//     note;

//     constructor(data) {
//         this.id = data.id;
//         this.client = data.client;
//         this.note = data.note;
//     }
// }

class avisDetailDto {

    id;
    //!client;
    firstname;
    lastname;
    comment;
    note;
    //!date;

    constructor(data) {
        this.id = data.id;
        //!this.client = data.client;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.comment = data.comment;
        this.note = data.note;
        //!this.date = data.date;
    }
}

module.exports = {avisDto,avisDetailDto};