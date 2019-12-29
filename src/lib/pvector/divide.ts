import { PVector } from "../../types";
import pVector from "./pvector";
import { curry } from "ramda";

export const divide = curry((divider: number, vector: PVector): PVector =>
  pVector(vector.x / divider, vector.y / divider))

export default divide