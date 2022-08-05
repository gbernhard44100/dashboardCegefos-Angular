import { FatnessType } from "./FatnessType"

export interface FatnessResultType {
  fatnessType: FatnessType|undefined,
  imc: number
}

export function instanceOfFatnessResult(object: any): object is FatnessResultType {
  return true;
}