const request = require('supertest');
const app = require('../../app');

xdescribe('Anime Endpoints', () => {
  xit('should get all animes', async () => {
    const res = await request(app).get('/animes');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Welcome to anime-list api. Seeing this message means it is working!');
  });
  xit('should create a new anime', async () => {
    const res = await request(app).post('/animes');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Welcome to anime-list api. Seeing this message means it is working!');
  });
  xit('should get an single anime as response', async () => {
    const res = await request(app).get('/anime');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Welcome to anime-list api. Seeing this message means it is working!');
  });
  xit('should update an single anime', async () => {
    const res = await request(app).post('/animes');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Welcome to anime-list api. Seeing this message means it is working!');
  });
  xit('should delete an single anime', async () => {
    const res = await request(app).delete('/anime');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Welcome to anime-list api. Seeing this message means it is working!');
  });
});