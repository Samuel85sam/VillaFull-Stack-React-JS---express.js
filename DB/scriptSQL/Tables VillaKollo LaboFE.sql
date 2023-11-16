CREATE TABLE client(
   id REAL,
   nom VARCHAR(50) NOT NULL,
   prenom VARCHAR(50) NOT NULL,
   tel REAL NOT NULL,
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   mail VARCHAR(50) NOT NULL,
   bank VARCHAR(50) NOT NULL,
   PRIMARY KEY(id),
   UNIQUE(tel),
   UNIQUE(createdAt),
   UNIQUE(updatedAt),
   UNIQUE(mail),
   UNIQUE(bank)
);

CREATE TABLE reservation(
   Id_reservation COUNTER,
   dateIn DATE NOT NULL,
   dateOut DATE NOT NULL,
   client_id BYTE NOT NULL,
   occupQty BYTE NOT NULL,
   avis_id BYTE NOT NULL,
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   id REAL NOT NULL,
   PRIMARY KEY(Id_reservation),
   UNIQUE(dateIn),
   UNIQUE(dateOut),
   UNIQUE(avis_id),
   UNIQUE(createdAt),
   UNIQUE(updatedAt),
   FOREIGN KEY(id) REFERENCES client(id)
);

CREATE TABLE users(
   id BYTE,
   client_id BYTE NOT NULL,
   login VARCHAR(50) NOT NULL,
   ashedPW VARCHAR(50) NOT NULL,
   jwt VARCHAR(50) NOT NULL,
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   PRIMARY KEY(id),
   UNIQUE(client_id),
   UNIQUE(ashedPW),
   UNIQUE(jwt),
   UNIQUE(createdAt),
   UNIQUE(updatedAt)
);

CREATE TABLE admin(
   id BYTE,
   login VARCHAR(50) NOT NULL,
   ashedPW VARCHAR(50) NOT NULL,
   jwt VARCHAR(50) NOT NULL,
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   PRIMARY KEY(id),
   UNIQUE(ashedPW),
   UNIQUE(jwt),
   UNIQUE(createdAt),
   UNIQUE(updatedAt)
);

CREATE TABLE avis(
   id REAL,
   reservation_id BYTE NOT NULL,
   client_id REAL NOT NULL,
   comment VARCHAR(50) NOT NULL,
   note REAL NOT NULL,
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME,
   id_1 REAL NOT NULL,
   Id_reservation INT NOT NULL,
   PRIMARY KEY(id),
   UNIQUE(Id_reservation),
   UNIQUE(reservation_id),
   UNIQUE(createdAt),
   UNIQUE(updatedAt),
   FOREIGN KEY(id_1) REFERENCES client(id),
   FOREIGN KEY(Id_reservation) REFERENCES reservation(Id_reservation)
);

CREATE TABLE facture(
   numFact BYTE,
   id BYTE NOT NULL,
   reservation__id BYTE NOT NULL,
   client_id BYTE NOT NULL,
   note BYTE NOT NULL,
   admin_id BYTE NOT NULL,
   reservation_id BYTE NOT NULL,
   montant_hors_tva CURRENCY NOT NULL,
   TVA BYTE NOT NULL,
   AutresTaxes CURRENCY,
   montant_total CURRENCY NOT NULL,
   dateFactOut DATE NOT NULL,
   datePayement DATE,
   id_1 REAL NOT NULL,
   id_2 BYTE NOT NULL,
   Id_reservation INT NOT NULL,
   PRIMARY KEY(numFact),
   UNIQUE(Id_reservation),
   UNIQUE(id),
   UNIQUE(reservation__id),
   UNIQUE(reservation_id),
   FOREIGN KEY(id_1) REFERENCES client(id),
   FOREIGN KEY(id_2) REFERENCES admin(id),
   FOREIGN KEY(Id_reservation) REFERENCES reservation(Id_reservation)
);

CREATE TABLE Asso_3(
   id REAL,
   id_1 BYTE,
   PRIMARY KEY(id, id_1),
   FOREIGN KEY(id) REFERENCES client(id),
   FOREIGN KEY(id_1) REFERENCES users(id)
);
