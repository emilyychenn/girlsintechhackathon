CREATE DATABASE IF NOT EXISTS user;

USE user;

CREATE TABLE IF NOT EXISTS `volunteers` (
	user_id int(11) NOT NULL AUTO_INCREMENT,
	user_email varchar(50) NOT NULL,
	user_pass varchar(255) NOT NULL,
    user_fname varchar(50) NOT NULL,
	CONSTRAINT PK_user_id PRIMARY KEY(user_id)
);

INSERT INTO `volunteers` VALUES(1,'volunteer1@gmail.com','test','Volunteer1');

CREATE TABLE IF NOT EXISTS `users` (
	user_id int(11) NOT NULL AUTO_INCREMENT,
	user_email varchar(50) NOT NULL,
	user_pass varchar(255) NOT NULL,
    user_fname varchar(50) NOT NULL,
	CONSTRAINT PK_user_id PRIMARY KEY(user_id)
);

INSERT INTO `users` VALUES(1,'user1@gmail.com','test','User1');