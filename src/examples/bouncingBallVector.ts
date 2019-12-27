import { circle, rect, square, p } from "../lib/virtual-p5"
import { drawShape, setStrokeEventually } from "../lib/render"
import { stroke } from "../lib/stroke"
import { colorize } from "../lib/color"
import { pVector, negate, add } from "../lib/pvector"

export default function(p5) {
  let pos = pVector(100, 100),
      speed = pVector(9, 4.5),
      ball = p('circle', pos, 100),
      draw = drawShape(p5)
  console.log(ball.pos)
  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    p5.fps = 1
  }
  
  p5.draw = () => {
    p5.background(255, 128, 128)
    setStrokeEventually(stroke(5, colorize([255, 0, 0])))
    draw(ball)
    if (ball.pos.x > p5.width || ball.pos.x < 0 ) speed.x = speed.x * -1
    if (ball.pos.y > p5.height || ball.pos.y < 0 ) speed.y = speed.y * -1
    ball.pos = add(ball.pos, speed)

  }
}
