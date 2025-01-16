const connection = require('./connection');

const getAll = () => connection.execute(
  `SELECT * FROM products`,
);

const getById = (id) => connection.execute(
  `SELECT * FROM products WHERE id = ?`, [id]
);

const insert = (product) => connection.execute(
  `INSERT INTO products 
    (name, value, description, stock) VALUES (?, ?, ?, ?)`,
  [product.name, product.value, product.description, product.stock],
);

module.exports = {
  getAll,
  getById,
  insert
};