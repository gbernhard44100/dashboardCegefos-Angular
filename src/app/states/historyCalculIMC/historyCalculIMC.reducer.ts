import { Action, createReducer, on } from '@ngrx/store';
import { HistoryCalculIMCType } from 'src/app/types/imc/historyCalculIMCType';
import { successfullyLoaded } from './historyCalculIMC.actions';

export type HistoryCalculIMCState = HistoryCalculIMCType[];

const initialHistoryCalculIMC: HistoryCalculIMCState = [];

const reducer = createReducer(
  initialHistoryCalculIMC,
  on(successfullyLoaded, (state, {historyCalculIMC}) => (historyCalculIMC))
);

export function historyCalculIMCReducer(state: HistoryCalculIMCState | undefined, action: Action) {
  return reducer(state, action);
}
