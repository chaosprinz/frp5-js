import { curry, ifElse } from "ramda"
import { hasCap, justNull, hasJoin, hasNoWeight } from "./helper"
import { Stroke } from "../types"

export const setColor = curry((p5, color) => {
  p5.colorMode(p5[color.mode])
  return p5.color.apply(p5, color.value)
})

const _setCap = (p5: any, stroke: Stroke): any => p5.strokeCap(p5[stroke.cap])
export const setCap = curry(_setCap)

export const setCapEventually = (p5: any, stroke: Stroke): any =>
  ifElse(hasCap, setCap(p5), justNull)(stroke)

const _setJoin = (p5: any, stroke: Stroke): any =>
  p5.strokeJoin(p5[stroke.join])
export const setJoin = curry(_setJoin)

export const setJoinEventually = (p5: any, stroke: Stroke): any =>
  ifElse(hasJoin, setJoin(p5), justNull)(stroke)

const _setStroke = curry((p5: any, stroke: Stroke) => {
  p5["stroke"](setColor(p5, stroke.color))
  p5["strokeWeight"](stroke.weight)
  setCapEventually(p5, stroke)
  setJoinEventually(p5, stroke)
})

const _setNoStroke = (p5: any, stroke: Stroke): any => p5.noStroke()
export const setNoStroke = curry(_setNoStroke)

const _setStrokeEventually = (p5: any, stroke: Stroke) => {
  return ifElse(hasNoWeight, setNoStroke(p5), _setStroke(p5))(stroke)
}

export const setStrokeEventually = curry(_setStrokeEventually)

export const drawShape = curry((p5: any, obj) => {
  p5[obj.name].apply(p5, obj.args)
})
