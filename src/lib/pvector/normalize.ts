import { PVector } from "../../types";
import divide from "./divide";
import magnitude from "./magnitude";
import { compose } from "ramda";

export const normalize = (vector: PVector): PVector =>
  divide(magnitude(vector), vector)

export default normalize