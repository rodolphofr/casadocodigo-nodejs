CREATE DATABASE casadocodigo_nodejs;
USE casadocodigo_nodejs;

CREATE TABLE products (
    id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title varchar(255) DEFAULT NULL,
    description text,
    price decimal(10,2) DEFAULT NULL
);

INSERT INTO products (title, description, price) VALUES
    ('Aprendendo NodeJS Vol.3', 'NodeZao', 30.00),
    ('Aprendendo NodeJS Vol.4', 'NodeZaço', 20.00),
    ('Aprendendo NodeJS Vol.5', 'NodeZaoooooo', 150.00),
    ('Aprendendo NodeJS Vol.6', 'NodeZaoooooocao', 380.00),
    ('Aprendendo Java', 'Java', 400.40),
    ('Aprendendo Ruby', 'Ruby', 30.00),
    ('Aprendendo PHP', 'PHP', 30.00);