import { pVector, divide } from '../../lib/pvector'

describe("divide - divide a vector by a given number", () => {
  const arg1 = pVector(30, 50)
  const arg2 = 2
  const result = divide(arg1, arg2)

  test('it should have arg1s x divided by arg2', () => {
    expect(result.x).toEqual(arg1.x / arg2)
  })

  test('it should have arg1s y divided by arg2', () => {
    expect(result.y).toEqual(arg1.y / arg2)
  })
})