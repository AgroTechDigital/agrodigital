var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('manejo unit tests:', () => {
    it('Should create a manejo instance', (done: Function) => {
        api.post('/manejos').send({
            data: 'Sat Jun 16 2018 11:04:37 GMT-0300 (Horário Padrão de Tocantins)',
            tempoPrevisto: 12345,
            estacao: 'test',
            tempoRecuperacao: 'Sat Jun 16 2018 11:04:37 GMT-0300 (Horário Padrão de Tocantins)'
        }).expect(200, done);
    });
});
