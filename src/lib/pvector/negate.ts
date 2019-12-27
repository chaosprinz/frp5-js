import { PVector } from "../../types";
import multiply from "./multiply";

export const negate = (vector: PVector): PVector => multiply(vector, -1)

export default negate