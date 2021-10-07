const request = require('supertest');
const app = require('../app');

describe('Index Endpoints', () => {
  it('should get the index message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Welcome to anime-list api. Seeing this message means it is working!');
  })
});