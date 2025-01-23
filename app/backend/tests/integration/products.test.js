// TIPOS DE TESTE: UNITÁRIO, INTEGRAÇÃO E2E;
// JEST:
// MOCHA: freamework de testes.
// CHAI: biblioteca de asserções.
// SINON: biblioteca de mocks. ???
// CHAI-HTTP: simular uma request a nossa API sem inicializá-la manualmente.

// INSTALAÇÃO
// npm install mocha@8.4.0 chai@4.3.4 --save-dev --save-exact
// npm install chai-http@4.3.0 --save-dev --save-exact

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

// const app = require('../../src/app');

describe('teste da rota /products', function() {
  it('GET /products', async function () {

    const output = [];

    const response = await chai
    .request(app)
    .get('/chocolates');

    expect(response.status).to.be.equals(200);
    expect(response.body).to.haveOwnProperty('products');
    expect(response.body.products).to.be.instanceOf(Array);
  });

  it('GET /products/:id', async function () {
    const response = await chai
    .request(app)
    .get('/chocolates/1');

    expect(response.status).to.be.equals(200);
    expect(response.body).to.haveOwnProperty('product');
    expect(response.body.product).to.be.instanceOf(Object);
  });
});