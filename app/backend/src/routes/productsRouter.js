const express = require('express');
const connection = require('../db/connection');
const { getAll } = require('../db/productsDB');

const router = express.Router();

router.get('/', async (request, response) => {
  const [result] = await getAll();
  response.status(200).json(result);

  // try {
  //   const [result] = await getAll();
  //   console.log(result);    
  //   response.status(200).json(result);
  // } catch (error) {
  //   console.log(error.message);
  //   response.status(500).json({ message: error.sqlMessage });
  // }
});

module.exports = router;