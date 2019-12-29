import { PVector } from "../../types";
import { curry } from "ramda";

export const pVector = curry((x: number, y: number): PVector => ({
  x, y
}))

export default pVector