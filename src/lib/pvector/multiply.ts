import { PVector } from "../../types";
import pVector from "./pvector";

export const multiply = (vector: PVector, scalar: number): PVector => 
  pVector(vector.x * scalar, vector.y * scalar)

export default multiply