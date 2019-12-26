export type Color = {
  mode: string
  value: number[]
}

export type Shape = {
  name: string
  args: any[]
}

export type Stroke = {
  weight: number
  color?: Color
  cap?: string
  join?: string
}

export type GraphicObject = {
  shape: Shape
  stroke: Stroke
}

export type PVector = {
  x: number
  y: number
}