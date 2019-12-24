import { Stroke, Color } from "../types"
import { colorize } from "./color"

export const stroke = (
  weight: number,
  color?: Color,
  cap?: string,
  join?: string
): Stroke => {
  const newStroke = {
    weight,
    color: color || colorize([0, 0, 0])
  }
  if (cap) newStroke.cap = cap
  if (join) newStroke.join = join
  return newStroke
}
