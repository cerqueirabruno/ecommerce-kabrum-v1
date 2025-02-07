const connection = require('./connection/connection');

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

const update = (id, product) => connection.execute(
  `UPDATE products 
    SET name = ?, value = ?, description = ?, stock = ? WHERE id = ?`,
  [product.name, product.value, product.description, product.stock, id],
);

/*
const remove = (id) => connection.execute(
  `DELETE FROM products WHERE id = ?`, [id]
);
*/

module.exports = {
  getAll,
  getById,
  insert,
  update
};