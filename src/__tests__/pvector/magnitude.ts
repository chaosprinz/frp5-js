import { pVector, magnitude } from '../../lib/pvector'

describe("magnitude - calculate the length of a vector", () => {
  const arg = pVector(20, 10)
  const result = magnitude(arg)
  test('it should be the sqrt of args (x*x) + (y*y)', () => {
    const expectation = Math.sqrt( (arg.x * arg.x) + (arg.y * arg.y) )
    expect(result).toEqual(expectation)
  })
})