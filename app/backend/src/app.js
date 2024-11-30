// IMPORTAÇÃO DE MÓDULOS
const express = require('express');

// IMPORTAÇÃO DE ROTAS
// const productsRouter = require('./routes/products');
// const clientsRouter = require('./routes/clients');
// const ordersRouter = require('./routes/orders');

// INVOCAÇÃO DO EXPRESS
const app = express();

// MIDDLEWARES
app.use(express.json());

// ROTA DEFAULT
app.get('/', (request, response) => {
  response.status(200).json({ message: 'Olá Mundo!' })
});

// ROTAS
// app.use('/products', productsRouter);
// app.use('/clients', clientsRouter);
// app.use('/orders', ordersRouter);

// EXPORTAÇÃO DO APP
module.exports = app;