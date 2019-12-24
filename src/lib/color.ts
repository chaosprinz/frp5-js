import { Color } from "../types"

export const colorize = (value: number[], mode?: string): Color => ({
  mode: mode || "RGB",
  value
})
