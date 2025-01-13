// IMPORTAÇÕES
const fs = require('fs');
const path = require('path');
const express = require('express');
const morgan = require('morgan');

const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');
const ordersRouter = require('./routes/ordersRouter');
const testeRouter = require('./routes/testeRouter');

// INVOCAÇÕES
const app = express();

// MIDDLEWARES
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'images')));
app.use(morgan('combined'));

// ROTA RAIZ
app.get('/', (request, response) => {
  response.status(200).json({ message: 'Olá Mundo!' })
});

// ROTAS
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/teste', testeRouter);

// ROTA DE ERRO
app.use((error, request, response, next) => {
  console.error(error.stack);
  next(error);  
});

app.use((error, request, response, next) => {
  response.status(500).json({ message: "DEU RUIM!" });
});

// EXPORTAÇÃO DO APP
module.exports = app;