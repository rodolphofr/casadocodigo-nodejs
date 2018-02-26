CREATE TABLE produtos (
    id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title varchar(255) DEFAULT NULL,
    description text,
    price decimal(10,2) DEFAULT NULL
);