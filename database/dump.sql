CREATE TABLE IF NOT EXISTS Users (
    userId INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    usermail VARCHAR(255) NOT NULL,
    password VARCHAR(256) NOT NULL,
    PRIMARY KEY (userId)
);

CREATE TABLE IF NOT EXISTS Roommates (
    roommateId INT NOT NULL AUTO_INCREMENT,
    userId INT,
    PRIMARY KEY (roommateId),
    FOREIGN KEY (userId) REFERENCES Users(userId) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Expenses (
    expenseId INT NOT NULL AUTO_INCREMENT,
    roommateId INT,
    PRIMARY KEY (expenseId),
    FOREIGN KEY (roommateId) REFERENCES Roommates(roommateId) ON DELETE CASCADE
);