var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('modulo unit tests:', () => {
    it('Should create a modulo instance', (done: Function) => {
        api.post('/modelos').send({
            descricao: 'test',
            quantidade: 12345
        }).expect(200, done);
    });
});
