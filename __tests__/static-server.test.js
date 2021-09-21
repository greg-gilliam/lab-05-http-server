import request from 'supertest';
import app from '../lib/app.js';
import { readFile } from 'fs/promises';

describe('Routes for static server', () => {
  it('should return index.html', async () => {
    const [response, index] = await Promise.all([
      request(app).get('/'),
      readFile('./public/index.html', 'utf-8'),
    ]);  
    expect(response.text).toEqual(index);
  });
});
