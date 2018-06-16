var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('piqueteEventos unit tests:', () => {
    it('Should create a piqueteEventos instance', (done: Function) => {
        api.post('/piquete-eventos').send({
            tipo: 'test',
            nome: 'test',
            data: 'Sat Jun 16 2018 10:58:46 GMT-0300 (Horário Padrão de Tocantins)',
            agendamento: 'Sat Jun 16 2018 10:58:46 GMT-0300 (Horário Padrão de Tocantins)'
        }).expect(200, done);
    });
});
