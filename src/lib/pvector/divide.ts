import { PVector } from "../../types";
import pVector from "./pvector";

export const divide = (vector: PVector, divider: number): PVector =>
  pVector(vector.x / divider, vector.y / divider)

export default divide