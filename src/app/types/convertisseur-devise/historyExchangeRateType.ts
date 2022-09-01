
export interface HistoryExchangeRateType {
  usd : number,
  euro: number,
  yen: number
}

export function instanceOfHistoryExchangeRateType(object: any): object is HistoryExchangeRateType {
  return true;
}