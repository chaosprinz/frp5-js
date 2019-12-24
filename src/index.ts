import "./styles.css"
import P5 from "p5"
import sketchMe from "./examples/bouncingBall"

const root = document.getElementById("app")

const sketch = p5 => {
  sketchMe(p5)
}

new P5(sketch, root)
