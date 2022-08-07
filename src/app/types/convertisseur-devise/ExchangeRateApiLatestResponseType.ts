export interface ExchangeRateApiLatestResponseType {
  success: boolean,
  timestamp: number,
  base: string,
  date: string,
  rates: {
    USD: number,
    EUR: number,
    JPY: number
  }
};

export function instanceOfExchangeRateApiLatestResponseType(object: any): object is ExchangeRateApiLatestResponseType {
  return true;
}