import { PVector } from "../../types"

export const subtract = (v1: PVector, v2: PVector): PVector => ({
  x: v1.x - v2.x,
  y: v1.y - v2.y
})

export default subtract