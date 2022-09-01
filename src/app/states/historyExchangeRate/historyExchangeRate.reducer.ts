import { Action, createReducer, on } from '@ngrx/store';
import { HistoryExchangeRateType } from 'src/app/types/convertisseur-devise/historyExchangeRateType';
import { successfullyLoaded } from './historyExchangeRate.actions';

export type HistoryExchangeRateState = HistoryExchangeRateType[];

const initialHistoryExchangeRateState: HistoryExchangeRateState = [];

const reducer = createReducer(
  initialHistoryExchangeRateState,
  on(successfullyLoaded, (state, {historyExchangeRate}) => (historyExchangeRate))
);

export function historyExchangeRateReducer(state: HistoryExchangeRateState | undefined, action: Action) {
  return reducer(state, action);
}
