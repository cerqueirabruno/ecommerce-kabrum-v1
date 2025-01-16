const express = require('express');
const connection = require('../db/connection');
const { getAll, getById, insert } = require('../db/productsDB');

const router = express.Router();

router.get('/', async (request, response) => {
  try {
    const [result] = await getAll();
    response.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.sqlMessage });
  }
});

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const [[result]] = await getById(id);

    if (result) {
      response.status(200).json(result);
    } else {
      response.status(404).json({ message: 'Produto não encontrada' })
    }

  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.sqlMessage });
  }
});

router.post('/', async (request, response) => {
  const product = request.body;
  
  try {
    const [result] = await insert(product);
    response.status(201).json({
      message: `Produto cadastrado com sucesso com o id ${result.insertId}` });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' });
  }
});

module.exports = router;