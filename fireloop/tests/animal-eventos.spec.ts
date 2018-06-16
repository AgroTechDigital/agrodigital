var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('animalEventos unit tests:', () => {
    it('Should create a animalEventos instance', (done: Function) => {
        api.post('/animal-eventos').send({
            nome: 'test',
            tipo: 'test'
        }).expect(200, done);
    });
});
