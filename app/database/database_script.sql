CREATE DATABASE kabrum;

USE kabrum;

CREATE TABLE address (
    id INT NOT NULL AUTO_INCREMENT,
    street VARCHAR(255) NOT NULL,
    district VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL,
    zip_code VARCHAR(8) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    cpf INT(9) NOT NULL,
    address_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (address_id) REFERENCES address (id)
);

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    descricao TEXT,
    estoque INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT,
    date DATE DEFAULT(NOW()),
    time TIME NOT NULL,
    value DECIMAL(10, 2) NOT NULL,
    observation TEXT,
    products_id INT,
    user_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (products_id) REFERENCES products (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

-- INSERÇÃO DE DADOS

/* endereços */
INSERT INTO address (street, district, city, country, zip_code)
VALUES ('Rua das Flores', 'Centro', 'São Paulo', 'Brasil', '12345-678');

INSERT INTO address (street, district, city, country, zip_code)
VALUES ('Avenida Paulista', 'Bela Vista', 'São Paulo', 'Brasil', '98765-432');

/* usuários */
INSERT INTO users (first_name, last_name, email, cpf, address_id)
VALUES ('João', 'Silva', 'joao.silva@email.com', 123456789, 1);

INSERT INTO users (first_name, last_name, email, cpf, address_id)
VALUES ('Maria', 'Oliveira', 'maria.oliveira@email.com', 987654321, 2);

/* produtos */
INSERT INTO products (nome, valor, descricao, estoque)
VALUES ('Cadeira de Escritório', 299.99, 'Cadeira ergonômica de escritório, com apoio para os braços.', 50);

INSERT INTO products (nome, valor, descricao, estoque)
VALUES ('Mesa de Reunião', 599.90, 'Mesa retangular para reuniões, com acabamento em madeira.', 30);

INSERT INTO products (nome, valor, descricao, estoque)
VALUES ('Luminária de Mesa', 79.90, 'Luminária ajustável para mesa de trabalho.', 100);

/* pedidos */
INSERT INTO orders (time, value, observation, products_id, user_id)
VALUES ('14:30:00', 299.99, 'Pedido de cadeira para escritório', 1, 1);

INSERT INTO orders (time, value, observation, products_id, user_id)
VALUES ('10:00:00', 879.89, 'Pedido de mesa e cadeira de escritório', 2, 2);

INSERT INTO orders (time, value, observation, products_id, user_id)
VALUES ('11:15:00', 79.90, 'Pedido de luminária de mesa', 3, 1);
