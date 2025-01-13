CREATE DATABASE Kabrum;

USE Kabrum;

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(60) NOT NULL UNIQUE,
    phone VARCHAR(15)
);

CREATE TABLE products (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    description VARCHAR(100),
    price DECIMAL(10,2) NOT NULL
);

-- CREATE TABLE orders (
--     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     user_id INT NOT NULL,
--     product_id INT NOT NULL,
--     quantity INT NOT NULL,
--     total DECIMAL(10,2) NOT NULL,
--     FOREIGN KEY (user_id) REFERENCES users(id),
--     FOREIGN KEY (product_id) REFERENCES products(id)
-- );