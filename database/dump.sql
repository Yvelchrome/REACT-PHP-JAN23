CREATE TABLE IF NOT EXISTS User (
    userId INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(256) NOT NULL,
    userSurname VARCHAR(256) NOT NULL,
    userMail VARCHAR(256) NOT NULL,
    password VARCHAR(256) NOT NULL,
    admin INT(1) NOT NULL DEFAULT 0,
    PRIMARY KEY (userId)
);

CREATE TABLE IF NOT EXISTS Roommates (
    roommateId INT NOT NULL AUTO_INCREMENT,
    userId INT,
    PRIMARY KEY (roommateId),
    FOREIGN KEY (userId) REFERENCES User(userId) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Expenses (
    expenseId INT NOT NULL AUTO_INCREMENT,
    roommateId INT,
    expenseName VARCHAR(256),
    expenseSum INT(10),
    alreadyPayed INT(10),
    PRIMARY KEY (expenseId),
    FOREIGN KEY (roommateId) REFERENCES Roommates(roommateId)
);

CREATE TABLE IF NOT EXISTS ExpenseByUser(
    ExpenseByUserId INT NOT NULL AUTO_INCREMENT,
    expenseId INT,
    userId INT,
    payed INT(10),
    PRIMARY KEY (ExpenseByUserId),
    FOREIGN KEY (expenseId) REFERENCES Expenses(expenseId),
    FOREIGN KEY (userId) REFERENCES User(userId)
)