CREATE TABLE IF NOT EXISTS Users (
    userId INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(256) NOT NULL,
    PRIMARY KEY (userId)
);

CREATE TABLE IF NOT EXISTS Roommates (
    roomMateId INT NOT NULL AUTO_INCREMENT,
);

CREATE TABLE IF NOT EXISTS Expenses (
    ExpensesId INT NOT NULL AUTO_INCREMENT,
);