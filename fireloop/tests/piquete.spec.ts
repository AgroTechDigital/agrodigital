var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('piquete unit tests:', () => {
    it('Should create a piquete instance', (done: Function) => {
        api.post('/piquetes').send({
            codigo: 'test',
            nome: 'test',
            area: 12345,
            tipo: 'test',
            tipo_capim: 'test',
            status: 'test',
            tempoRecuperacao: 12345,
            capacidadeUa: 12345
        }).expect(200, done);
    });
});
