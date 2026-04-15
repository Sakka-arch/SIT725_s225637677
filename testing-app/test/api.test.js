const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('API Tests', () => {

    it('should return correct sum', async () => {
        const res = await request(app).get('/api/math/add?a=2&b=3');
        expect(res.status).to.equal(200);
        expect(res.body.result).to.equal(5);
    });

    it('should handle invalid input', async () => {
        const res = await request(app).get('/api/math/add?a=x&b=3');
        expect(res.status).to.equal(400);
    });

});