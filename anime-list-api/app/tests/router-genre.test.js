const request = require('supertest');
const app = require('../../app');

describe('Genre Endpoints', () => {
  it('should get all genres', async () => {
    const res = await request(app).get('/genres');

    expect(res).toBeDefined();
    expect(res.statusCode).toEqual(200);
    expect(res.body[0].id).toBeDefined();
    expect(res.body[0].title).toBeDefined();
  });

  it('should get a single genre as response', async () => {
    const res = await request(app).get('/genre/10');

    expect(res.statusCode).toEqual(200);
    expect(res.body.id).toBeDefined();
    expect(res.body.title).toBeDefined();
  });

  xit('should create a new genre', async () => {

    const res = await request(app).post('/genre');
    //expect(res).toBeDefined();
    //expect(res.statusCode).toEqual(200);
    //expect(res.body.message).toEqual('Welcome to anime-list api. Seeing this message means it is working!');
  });
  xit('should update a single genre', async () => {
    const res = await request(app).post('/genres');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Welcome to anime-list api. Seeing this message means it is working!');
  });
  xit('should delete a single genre', async () => {
    const res = await request(app).delete('/genre');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Welcome to anime-list api. Seeing this message means it is working!');
  });
});