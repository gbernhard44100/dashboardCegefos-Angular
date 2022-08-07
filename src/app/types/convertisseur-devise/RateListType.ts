export interface RateListType {
  USD: number,
  EUR: number,
  JPY: number
};

export function instanceOfRateListType(object: any): object is RateListType {
  return true;
}