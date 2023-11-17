class avisDto {

    id;
    //!client;
    firstName;
    lastName;
    comment;
    note;
    //!date;

    constructor(data) {
        this.id = data.id;
        //!this.client = data.client;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
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
    firstName;
    lastName;
    comment;
    note;
    //!date;

    constructor(data) {
        this.id = data.id;
        //!this.client = data.client;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.comment = data.comment;
        this.note = data.note;
        //!this.date = data.date;
    }
}

module.exports = {avisDto,avisDetailDto};