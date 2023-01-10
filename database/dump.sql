CREATE TABLE IF NOT EXISTS User (
    userId INT NOT NULL AUTO_INCREMENT,
<<<<<<< HEAD
    userName VARCHAR(255) NOT NULL,
    userMail VARCHAR(255) NOT NULL,
    password VARCHAR(256) NOT NULL,
=======
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    mail VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    admin INT(1) NOT NULL DEFAULT 0,
>>>>>>> 55eaf3cc6974db95071bf21a5ee40969360ab982
    PRIMARY KEY (userId)
);

CREATE TABLE IF NOT EXISTS Roommates (
    roommateId INT NOT NULL AUTO_INCREMENT,
    userId INT,
<<<<<<< HEAD
    PRIMARY KEY (roommateId)
=======
    PRIMARY KEY (roommateId),
    FOREIGN KEY (userId) REFERENCES User(userId) ON DELETE CASCADE
>>>>>>> 55eaf3cc6974db95071bf21a5ee40969360ab982
);

CREATE TABLE IF NOT EXISTS Expenses (
    expenseId INT NOT NULL AUTO_INCREMENT,
    roommateId INT,
    expenseName VARCHAR(255), loyer
    expenseSum INT(10),
    alreadyPayed INT(10)
    PRIMARY KEY (expenseId)
);

CREATE TABLE IF NOT EXISTS ExpenseByUser(
    ExpenseByUserId INT NOT NULL AUTO_INCREMENT,
    expenseId INT,
    userId INT,
    payed INT(10),
    PRIMARY KEY (ExpenseByUserId)

)

ALTER TABLE Roommates ADD CONSTRAINT FOREIGN KEY (userId) REFERENCES Users(userId);

ALTER TABLE Expenses ADD CONSTRAINT FOREIGN KEY (roommateId) REFERENCES Roommates(roommateId);

ALTER TABLE ExpenseByUser ADD CONSTRAINT FOREIGN KEY (expenseId) REFERENCES Expenses(expenseId);

ALTER TABLE ExpenseByUser ADD CONSTRAINT FOREIGN KEY (userId) REFERENCES Users(userId);
