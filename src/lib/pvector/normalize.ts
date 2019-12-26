import { PVector } from "../../types";
import divide from "./divide";
import magnitude from "./magnitude";

export const normalize = (vector: PVector): PVector =>
  divide(vector, magnitude(vector))


export default normalize