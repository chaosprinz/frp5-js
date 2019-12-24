import { equals, has, always, compose, prop, map, addIndex } from "ramda"

export const isZero = equals(0)
export const hasNoWeight = compose(
  isZero,
  prop("weight")
)
export const hasCap = has("cap")
export const hasJoin = has("join")
export const justNull = always(null)
export const mapIndexed = addIndex(map)

export const randomInRange = (min: number, max: number) =>
  Math.round(Math.random() * (max - min))
