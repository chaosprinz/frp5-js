import { mapIndexed, randomInRange } from "../lib/helper"
import { curry } from "ramda"
import { rect, circle } from "../lib/virtual-p5"
import { stroke } from "../lib/stroke"
import { colorize } from "../lib/color"
import { setStrokeEventually, drawShape } from "../lib/render"
import { pVector } from "../lib/pvector"

const createBall = curry((offsetX, offsetY, size, i) =>
  rect(pVector(offsetX * i, offsetY), size, size)
)

const createBall2 = curry((offsetX, offsetY, size, i) =>
  circle(pVector(offsetX, offsetY * i), size, size)
)

const createBalls = (count, offsetX, size, offsetY, offsetFunction) => {
  let balls = new Array(count)
  let createBallWithArgs = offsetFunction(offsetX, offsetY)

  return mapIndexed(
    (v, i) => createBallWithArgs(size + (Math.random() * size) / 2, i),
    balls
  )
}

export default function(p5) {
  const draw = drawShape(p5)
  const setStroke = setStrokeEventually(p5)
  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    p5.fps = 30
  }

  let x = 0
  let y = 0
  p5.draw = () => {
    p5.background(p5.color(66, 66, 66))
    p5.noFill()
    const Balls = createBalls(500, 20, 80, x, createBall)
    for (let row of [
      0,
      55,
      122,
      150,
      210,
      266,
      333,
      366,
      422,
      500,
      55,
      610,
      666
    ]) {
      const Balls2 = createBalls(
        22,
        y + row,
        100,
        window.innerHeight / 2 / 10,
        createBall2
      )
      for (let ball of Balls2) {
        setStroke(
          stroke(
            randomInRange(1, 15),
            colorize([
              randomInRange(15, 255),
              randomInRange(11, 44),
              randomInRange(182, 255),
              87
            ])
          )
        )
        draw(ball)
      }
    }

    for (let Ball of Balls) {
      setStroke(
        stroke(
          randomInRange(1, 10),
          colorize([
            randomInRange(0, 133),
            randomInRange(22, 33),
            randomInRange(120, 240)
          ])
        )
      )
      draw(Ball)
    }

    x += 5
    y += 18

    if (x >= window.innerHeight + 40) x = 0
    if (y >= window.innerWidth + 160) y = -770
    //  setStroke(stroke(randomInRange(1,15)))
  }
}
