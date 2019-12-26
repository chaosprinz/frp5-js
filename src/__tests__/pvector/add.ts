import { pVector, add }from '../../lib/pvector'

describe('add - function to add two pVectors', () => {
  const arg1 = pVector(10, 5)
  const arg2 = pVector(12, 15)
  const result = add(arg1, arg2)

  test('should add the x of arg1 and arg2', () => {
    expect(result.x).toEqual(22)
  })

  test('should add the y of arg1 and arg2', () => {
    expect(result.y).toEqual(20)
  })
})