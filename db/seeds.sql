-- Still in the db folder, create a seeds.sql file. In this file, write insert queries to populate the burgers table with at least three entries.

USE burger_db;

INSERT INTO burgers (burger_name, devoured) VALUES ('Cheese Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Becon & Cheese Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Veggie Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Beef Burger', false);

SELECT * FROM burgers;

