import { pVector, magnitude, negate } from '../../lib/pvector'

describe("negate - negates the diretion of a given vector", () => {
  const arg = pVector(30, 30),
    result = negate(arg)

  test("it should have negative x and y of arg", () => {
    expect(result).toEqual(pVector(-30, -30))
  })

  test("it should keep the magnitude of arg", () => {
    expect(magnitude(result)).toEqual(magnitude(arg))
  })

})