import pVector from "../../lib/pvector/pvector"

describe('pVector constructor', () => {
  const testargs = [1,2,3,4,5]
  
  test('it should return an obect with x equal to arg1', () => {
    const arg2 = 15
    for(let arg1 of testargs) {
      const result = pVector(arg1, arg2)
      expect(result.x).toEqual(arg1)
    }
  })

  test('it should return an object with y equal to arg2', () => {
    const arg1 = 15
    for(let arg2 of testargs) {
      const result = pVector(arg1, arg2)
      expect(result.y).toEqual(arg2)
    }
  })
})