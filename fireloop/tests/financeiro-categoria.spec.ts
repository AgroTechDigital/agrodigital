var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('financeiroCategoria unit tests:', () => {
    it('Should create a financeiroCategoria instance', (done: Function) => {
        api.post('/financeiro-categoria').send({
            descricao: 'test'
        }).expect(200, done);
    });
});
