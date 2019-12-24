import { curry } from "ramda"
import { Shape } from "../types"

export const p = curry(
  (name: string, x, y, ...rest: any[]): Shape => {
    return {
      name,
      args: [x, y, ...rest]
    }
  }
)

export const circle = p("circle")
export const rect = p("rect")
export const line = p("line")
export const point = p("point")
export const quad = p("quad")
export const square = p("square")
export const triangle = p("triangle")
export const ellipse = p("ellipse")
