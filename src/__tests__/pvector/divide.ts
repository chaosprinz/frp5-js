import { pVector, divide } from '../../lib/pvector'

describe("divide - divide a vector by a given number", () => {
  const arg1 = 2
  const arg2 = pVector(30, 50)
  const result = divide(arg1, arg2)

  test('it should have arg2s x divided by arg1', () => {
    expect(result.x).toEqual(arg2.x / arg1)
  })

  test('it should have arg2s y divided by arg1', () => {
    expect(result.y).toEqual(arg2.y / arg1)
  })
})