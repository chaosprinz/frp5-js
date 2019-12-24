import "./styles.css"
import P5 from "p5"
import { curry } from "ramda"
import { mapIndexed } from "./lib/helper"
import { circle } from "./lib/virtual-p5"
import { stroke } from "./lib/stroke"
import { colorize } from "./lib/color"
import { setStrokeEventually, drawShape } from "./lib/render"

const root = document.getElementById("app")

let red = colorize([255, 0, 0])

let randomInRange = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min))
}

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

new P5(sketch, root)
