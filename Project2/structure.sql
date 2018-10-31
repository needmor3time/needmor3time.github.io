CREATE DATABASE barkfinder_db;
USE barkfinder_db;

CREATE TABLE dogs
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    photo VARCHAR(255),
    other_dogs NUMERIC,
    cats NUMERIC,
    exercise NUMERIC,
    special NUMERIC,
    age NUMERIC,
    childern NUMERIC,
    size NUMERIC,
    fur NUMERIC,
    food NUMERIC,
    protective NUMERIC,
	gender BOOLEAN DEFAULT false,
    experience BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

select * from dogs