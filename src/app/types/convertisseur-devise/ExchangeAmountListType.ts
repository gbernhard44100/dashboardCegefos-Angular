export interface ExchangedAmountListType {
  usdAmount: number,
  euroAmount: number,
  yenAmount: number
};

export function instanceOfExchangeAmountListType(object: any): object is ExchangedAmountListType {
  return true;
}