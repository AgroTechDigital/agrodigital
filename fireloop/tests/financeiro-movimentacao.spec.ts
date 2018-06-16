var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('financeiroMovimentacao unit tests:', () => {
    it('Should create a financeiroMovimentacao instance', (done: Function) => {
        api.post('/financeiro-movimentacaos').send({
            descricao: 'test',
            valor: 12345,
            dataPrevista: 'Sat Jun 16 2018 18:16:50 GMT-0300 (Horário Padrão de Tocantins)',
            dataQuitado: 'Sat Jun 16 2018 18:16:50 GMT-0300 (Horário Padrão de Tocantins)'
        }).expect(200, done);
    });
});
