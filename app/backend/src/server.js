const app = require('./app');
const connection = require('./db/connection');

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  // TESTA CONEXÃO COM O BANCO DE DADOS
  // const [result] = await connection.execute('USE Kabrum;');
  // if (result) {
  //   console.log('MySQL connection OK');
  // }
});