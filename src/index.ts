import "./styles.css"
import P5 from "p5"
import { curry } from "ramda"
import { mapIndexed } from "./lib/helper"
import { circle } from "./lib/virtual-p5"
import { stroke } from "./lib/stroke"
import { colorize } from "./lib/color"
import { setStrokeEventually, drawShape } from "./lib/render"

const root = document.getElementById("app")

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
  let r = 255
  let rUp = false
  let g = 0
  let gUp = true
  let b = 255
  let bUp = false

  p5.draw = () => {
    p5.background(p5.color(44, 77, 252))
    p5.noFill()
    const Balls = createBalls(500, 20, 80, x)
    const col = colorize([r, g, b])
    for (let Ball of Balls) {
      setStroke(stroke(randomInRange(1, 10), col))
      draw(Ball)
    }
    x += 5
    if (r <= 0) rUp = true
    if (r >= 255) rUp = false
    r = rUp ? r + 1 : r - 2

    if (b <= 0) bUp = true
    if (b >= 255) bUp = false
    b = bUp ? b + 2 : b - 1

    if (g <= 0) gUp = true
    if (g >= 255) gUp = false
    g = gUp ? g + 1 : g - 1

    if (x >= window.innerHeight + 40) x = 0
    //  setStroke(stroke(randomInRange(1,15)))
  }
}

new P5(sketch, root)
