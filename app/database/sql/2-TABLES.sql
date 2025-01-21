-- 1
CREATE TABLE address (
    id INTEGER PRIMARY KEY AUTO_INCREMENT, -- ID
    street VARCHAR(120) NOT NULL, -- RUA
    district VARCHAR(50) NOT NULL, -- BAIRRO
    city VARCHAR(50) NOT NULL, -- CIDADE
    country VARCHAR(50) NOT NULL, -- PAÍS
    zip_code VARCHAR(8) NOT NULL -- CEP
);

-- 2
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT, -- ID
    first_name VARCHAR(50) NOT NULL, -- NOME
    last_name VARCHAR(250) NOT NULL, -- SOBRENOME
    email VARCHAR(100) NOT NULL UNIQUE, -- EMAIL
    cpf VARCHAR(11) NOT NULL UNIQUE, -- CPF
    address_id INTEGER, -- @REF
    FOREIGN KEY (address_id) REFERENCES address (id) ON DELETE SET NULL
);

-- 3
CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTO_INCREMENT, -- ID
    name VARCHAR(255) NOT NULL, -- NOME
    value DECIMAL(10, 2) NOT NULL, -- VALOR
    description TEXT, -- DESCRIÇÃO
    stock INTEGER NOT NULL -- ESTOQUE
);

-- 4
CREATE TABLE orders (
    id INTEGER PRIMARY KEY AUTO_INCREMENT, -- ID
    purchase_date DATE DEFAULT(NOW()), -- DATA DA COMPRA
    time DATETIME DEFAULT CURRENT_TIMESTAMP, -- ???
    value DECIMAL(10, 2) NOT NULL, -- VALOR
    observation TEXT, -- OBSERVAÇÃO
    user_id INT, -- @REF
    FOREIGN KEY (user_id) REFERENCES users (id)
);

-- 5
CREATE TABLE order_products (
    order_id INT,
    product_id INT,
    quantity INT CHECK (quantity > 0),
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES orders (id),
    FOREIGN KEY (product_id) REFERENCES products (id)
);