CREATE TABLE IF NOT EXISTS User (
    userId INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(256) NOT NULL,
    PRIMARY KEY (userId)
);