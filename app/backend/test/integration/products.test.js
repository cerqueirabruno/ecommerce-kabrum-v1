const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../src/app');

describe('teste da rota /products', function() {
  it('GET /products', async function () {

    const response = await chai
    .request(app)
    .get('/products');

    expect(response.status).to.be.equals(200);
    expect(response.body).to.be.instanceOf(Array);
  });

  it('GET /products/:id', async function () {
    const response = await chai
    .request(app)
    .get('/products/1');

    expect(response.status).to.be.equals(200);
    expect(response.body).to.be.instanceOf(Object);
    expect(response.body).to.haveOwnProperty('id');
    expect(response.body).to.haveOwnProperty('name');
    expect(response.body).to.haveOwnProperty('value');
    expect(response.body).to.haveOwnProperty('description');
    expect(response.body).to.haveOwnProperty('stock');
  });
});