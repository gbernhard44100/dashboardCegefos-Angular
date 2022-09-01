
export interface HistoryCalculIMCType {
  weight : number,
  height: number,
  imc: number
}

export function instanceOfHistoryCalculIMCType(object: any): object is HistoryCalculIMCType {
  return true;
}