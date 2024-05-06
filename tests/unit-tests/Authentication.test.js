const request = require('supertest');
const app = require('../../app'); // Ensure this points to your app's entry file
const User = require('../../models/UserModel');
jest.mock('../../models/UserModel');

describe('POST /register', () => {
  it('should prevent registration if user already exists', async () => {
    User.findOne.mockResolvedValue({
      name: 'John Doe',
      email: 'john@example.com',
    });

    const response = await request(app)
      .post('/api/register')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123'
      });

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({ message: 'User already exists' });
  });
});
