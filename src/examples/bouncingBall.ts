import { circle } from "../lib/virtual-p5"
import { drawShape, setStrokeEventually } from "../lib/render"
import { stroke } from "../lib/stroke"
import { colorize } from "../lib/color"

export default function(p5) {
  let x = 100,
    y = 100,
    xspeed = 5,
    yspeed = 9.3

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
  }

  p5.draw = () => {
    p5.background(255)
    x += xspeed
    y += yspeed

    if (x > window.innerWidth || x < 0) xspeed *= -1
    if (y > window.innerHeight || y < 0) yspeed *= -1

    setStrokeEventually(stroke(5, colorize([255, 0, 0])))
    const Ball = circle(x, y, 100)
    drawShape(p5, Ball)
  }
}
