const prosjek = require('../utils/za_testiranje').prosjek

describe('prosjek', () => {

  test('samo jedna vrijednost', () => {
    expect(prosjek([1])).toBe(1)
  })

  test('od više brojeva', () => {
    expect(prosjek([1, 2, 3, 4, 5, 6])).toBe(3.5)
  })

  test('tri decimalna', () => {
    expect(prosjek([0.1, 0.1, 0.1])).toBeCloseTo(0.1)
  })

  test('od praznog niza je 0', () => {
    expect(prosjek([])).toBe(0)
  })

})