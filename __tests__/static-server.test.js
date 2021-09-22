const request = require('supertest');
const app = require('../lib/app.js');
const { readFile } = require('fs/promises');

describe('Routes for static server', () => {
  it('should return index.html', async () => {
    const [response, index] = await Promise.all([
      request(app).get('/'),
      readFile('./public/index.html', 'utf-8'),
    ]);  
    expect(response.text).toEqual(index);
  });
  // it('it tests for the return of CSS from GET', async() => {
  //   const [response, file] = await Promise.all([
  //     request(app).get('/styles/main.css'),
  //     readFile('./public/styles/main.css', 'utf-8')
  //   ]);
  // });
});
