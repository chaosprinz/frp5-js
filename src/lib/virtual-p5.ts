import { curry } from "ramda"
import { Shape, PVector } from "../types"


const _p = (name: string, pos: PVector, ...rest: any[]): Shape => {
  return {
    name,
    pos,
    args: [...rest]
  }
}

export const p = curry(_p)

export const circle = p("circle")
export const rect = p("rect")
export const line = p("line")
export const point = p("point")
export const quad = p("quad")
export const square = p("square")
export const triangle = p("triangle")
export const ellipse = p("ellipse")
