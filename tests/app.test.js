const request = require('supertest');
const app = require('../app');

test('GET / should return Hello message', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hello DevOps CI Pipeline');
});
