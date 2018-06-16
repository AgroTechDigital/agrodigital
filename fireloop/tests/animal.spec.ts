var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('animal unit tests:', () => {
    it('Should create a animal instance', (done: Function) => {
        api.post('/animals').send({
            tipo: 'test',
            raca: 'test',
            categoria: 'test',
            etiqueta: 'test',
            origem: 12345,
            finalidade: 'test',
            nascimento: 'Sat Jun 16 2018 11:13:33 GMT-0300 (Horário Padrão de Tocantins)',
            peso: 12345,
            status: 'test'
        }).expect(200, done);
    });
});
