import { PVector } from "../../types"

export const magnitude = (vector: PVector): number => 
  Math.sqrt( (vector.x * vector.x) + (vector.y * vector.y))

export default magnitude