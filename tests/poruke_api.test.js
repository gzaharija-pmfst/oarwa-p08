const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const Poruka = require('../models/poruka')	
const pocetnePoruke = [
  {
    id: 1,
    sadrzaj: 'HTML je jednostavan',
    datum: '2019-05-30T17:30:31.098Z',
    vazno: true
  },
  {
    id: 2,
    sadrzaj: 'React koristi JSX sintaksu',
    datum: '2019-05-30T18:39:34.091Z',
    vazno: false
  },
  {
    id: 3,
    sadrzaj: 'GET i POST su najvaznije metode HTTP protokola',
    datum: '2019-05-30T19:20:14.298Z',
    vazno: true
  }
]

beforeEach( async () => {
  await Poruka.deleteMany({})
  let objektPoruka = new Poruka(pocetnePoruke[0])
  await objektPoruka.save()
  objektPoruka = new Poruka(pocetnePoruke[1])
  await objektPoruka.save()
  objektPoruka = new Poruka(pocetnePoruke[2])
  await objektPoruka.save()
})

test('poruke se vraćaju kao JSON', async () => {
  await api
    .get('/api/poruke')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('dohvaća sve poruke', async () => {
  const odgovor = await api.get('/api/poruke')

  expect(odgovor.body).toHaveLength(pocetnePoruke.length)
})

test('specificni sadrzaj jedne poruke', async () => {
  const odgovor = await api.get('/api/poruke')

  const sadrzaj = odgovor.body.map(p => p.sadrzaj)
  expect(sadrzaj).toContain('React koristi JSX sintaksu')
})

afterAll(() => {
  mongoose.connection.close()
})