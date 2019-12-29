import { PVector } from "../../types";
import pVector from "./pvector";
import { curry } from "ramda";

export const multiply = curry((scalar: number, vector: PVector): PVector => 
  pVector(vector.x * scalar, vector.y * scalar))

export default multiply