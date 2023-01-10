CREATE TABLE IF NOT EXISTS Users (
    userId INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(255) NOT NULL,
    userMail VARCHAR(255) NOT NULL,
    password VARCHAR(256) NOT NULL,
    PRIMARY KEY (userId)
);

CREATE TABLE IF NOT EXISTS Roommates (
    roommateId INT NOT NULL AUTO_INCREMENT,
    userId INT,
    PRIMARY KEY (roommateId)
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
