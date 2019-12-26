import { pVector, magnitude, divide, normalize } from '../../lib/pvector'

describe('normalize - caclulate a vector of length 1 pointing to the direction of a given vector', () => {
  const arg = pVector(3, 4)
  const result = normalize(arg)

  test('it should return a vector of length 1', () => {
    expect(magnitude(result)).toEqual(1)
  })

  test('it should keep the direction of arg', () => {
    const expectation = {
      x: arg.x / magnitude(arg),
      y: arg.y / magnitude(arg)
    }
    expect(result).toEqual(expectation)
  })
})