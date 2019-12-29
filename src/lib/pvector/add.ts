import { PVector } from "../../types";
import { curry } from "ramda";

export const add = curry((v1: PVector, v2: PVector): PVector => ({
  x: v1.x + v2.x,
  y: v1.y + v2.y
}))