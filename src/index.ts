import { Color, Shape, Stroke, GraphicObject } from "./types"
import "./styles.css"
import P5 from "p5"
import {
  curry,
  ifElse,
  equals,
  has,
  always,
  compose,
  prop,
  map,
  addIndex
} from "ramda"

const root = document.getElementById("app")

const isZero = equals(0)
const hasNoWeight = compose(
  isZero,
  prop("weight")
)
const hasCap = has("cap")
const hasJoin = has("join")
const justNull = always(null)
const mapIndexed = addIndex(map)

const p = curry(
  (name: string, x, y, ...rest: any[]): Shape => {
    return {
      name,
      args: [x, y, ...rest]
    }
  }
)

const colorize = (value: number[], mode?: string): Color => ({
  mode: mode || "RGB",
  value
})

const stroke = (
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

const circle = p("circle")
const rect = p("rect")

const setColor = curry((p5, color) => {
  p5.colorMode(p5[color.mode])
  return p5.color.apply(p5, color.value)
})

const _setCap = (p5: any, stroke: Stroke): any => p5.strokeCap(p5[stroke.cap])
const setCap = curry(_setCap)

const setCapEventually = (p5: any, stroke: Stroke): any =>
  ifElse(hasCap, setCap(p5), justNull)(stroke)

const _setJoin = (p5: any, stroke: Stroke): any =>
  p5.strokeJoin(p5[stroke.join])
const setJoin = curry(_setJoin)

const setJoinEventually = (p5: any, stroke: Stroke): any =>
  ifElse(hasJoin, setJoin(p5), justNull)(stroke)

const _setStroke = curry((p5: any, stroke: Stroke) => {
  p5["stroke"](setColor(p5, stroke.color))
  p5["strokeWeight"](stroke.weight)
  setCapEventually(p5, stroke)
  setJoinEventually(p5, stroke)
})

const _setNoStroke = (p5: any, stroke: Stroke): any => p5.noStroke()
const setNoStroke = curry(_setNoStroke)

const _setStrokeEventually = (p5: any, stroke: Stroke) => {
  return ifElse(hasNoWeight, setNoStroke(p5), _setStroke(p5))(stroke)
}

const setStrokeEventually = curry(_setStrokeEventually)

const drawShape = curry((p5: any, obj) => {
  p5[obj.name].apply(p5, obj.args)
})

let red = colorize([255, 0, 0])

let oneOrZero = x => (x < 0.5 ? 0 : 1)

let randomInRange = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min))
}

console.log(randomInRange(0, 10))
let myStroke = stroke(20, colorize([255, 255, 128, 32]))

const Ball = circle(300, 300, 100, 100)

const createBall = curry((offsetX, offsetY, size, i) =>
  circle(offsetX * i, offsetY, size, size)
)

const createBalls = (count, offsetX, size, offsetY) => {
  let balls = new Array(count)
  let createBallWithArgs = createBall(offsetX, offsetY)

  return mapIndexed(
    (v, i) => createBallWithArgs(size + (Math.random() * size) / 2, i),
    balls
  )
}

const sketch = p5 => {
  const draw = drawShape(p5)
  const setStroke = setStrokeEventually(p5)
  const pColor = setColor(p5)
  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    p5.fps = 2
  }
  let x = 0

  p5.draw = () => {
    p5.background(p5.color(44, 77, 252))
    p5.noFill()
    const Balls = createBalls(120, 40, 80, x)
    for (let Ball of Balls) {
      setStroke(stroke(randomInRange(1, 10), red))
      draw(Ball)
    }
    x += 5
    if (x >= window.innerHeight + 40) x = 0
    //  setStroke(stroke(randomInRange(1,15)))
  }
}

const mySketch = new P5(sketch, root)
