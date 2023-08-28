require('dotenv').config()
const request = require('supertest')
const mongoose = require('mongoose')
const app = require('../../app')
const User = require('../../models/user')

const { DB_HOST_TEST } = process.env

describe('registration new user', () => {
  beforeAll(async () => {
    await mongoose
      .connect(DB_HOST_TEST)
      .then(() => console.log('DB Connected'))
      .catch((err) => {
        console.log(err)
      })

    await User.deleteMany()
  })

  it('shoud registrate new user', async () => {
    const response = await request(app).post('/api/auth/registration').send({
      email: 'usertest@gmail.com',
      password: '123456',
    })
    expect(response.statusCode).toBe(201)
    expect(response.body.email).toBe('usertest@gmail.com')
  })

  it('shoud not registrate the same user 2 times', async () => {
    const response = await request(app).post('/api/auth/registration').send({
      email: 'usertest@gmail.com',
      password: '123456',
    })

    expect(response.statusCode).toBe(409)
  })

  afterAll(async () => {
    await mongoose.disconnect(DB_HOST_TEST).then(() => {
      // console.log('DB disconnected')
    })
  })
})
