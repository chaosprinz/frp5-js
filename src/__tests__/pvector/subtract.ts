import { pVector, subtract } from '../../lib/pvector'

describe('subtract - subtracts two pVectors', () => {
  const arg1 = pVector(30, 15)
  const arg2 = pVector(15, 5)
  const result = subtract(arg1, arg2)

  test('it should subtract arg2s x from arg1s x', () => {
    expect(result.x).toEqual(15)
  })

  test('it should subtract arg2s y from arg1s y', () => {
    expect(result.y).toEqual(10)
  })
})