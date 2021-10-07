const request = require('supertest');
const app = require('../../app');

describe('Anime Endpoints', () => {
  it('should get all animes', async () => {
    const res = await request(app).get('/animes');

    expect(res).toBeDefined();
    expect(res.statusCode).toEqual(200);
    expect(res.body[0].id).toBeDefined();
    expect(res.body[0].title_eng).toBeDefined();
    expect(res.body[0].title_jp).toBeDefined();
  });
  it('should get an single anime as response', async () => {
    const res = await request(app).get('/anime/74');

    expect(res.statusCode).toEqual(200);
    expect(res.body.id).toBeDefined();
    expect(res.body.title_eng).toBeDefined();
    expect(res.body.title_jp).toBeDefined();
  });
  xit('should create a new anime', async () => {
    /* const exampleAnime = {
      title_eng: 'Example Anime',
      title_jp: 'rei / 例'
    } */

    const res = await request(app).post('/animes');
    //expect(res).toBeDefined();
    //expect(res.statusCode).toEqual(200);
    //expect(res.body.message).toEqual('Welcome to anime-list api. Seeing this message means it is working!');
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