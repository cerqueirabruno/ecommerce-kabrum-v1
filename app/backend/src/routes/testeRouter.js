const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (request, response) => {
  const imagePath = path.resolve(__dirname, '../images', 'javascript.png');
  
  response.sendFile(imagePath);
});

module.exports = router;
