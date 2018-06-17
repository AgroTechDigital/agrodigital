var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('animalRFID unit tests:', () => {
    it('Should create a animalRFID instance', (done: Function) => {
        api.post('/animal-rfids').send({
            id: 'test',
            peso: 12345
        }).expect(200, done);
    });
});
