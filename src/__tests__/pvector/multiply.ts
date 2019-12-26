import { pVector, multiply } from '../../lib/pvector'

describe('multiply - scales a vector by a nummrical value', () => {
  const arg1 = pVector(20, 15)
  const arg2 = 3
  const result = multiply(arg1, arg2)

  test('it should multiply arg1s x by arg2', () => {
    expect(result.x).toEqual(60)
  })

  test('it should multiply arg1s y by arg2', () => {
    expect(result.y).toEqual(45)
  })
})