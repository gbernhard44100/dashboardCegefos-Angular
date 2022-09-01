import { createAction, props } from '@ngrx/store';
import { HistoryExchangeRateType } from 'src/app/types/convertisseur-devise/historyExchangeRateType';

export const requestLoad = createAction('[historyExchangeRate] Request load');
export const successfullyLoaded = createAction('[historyExchangeRate] History Loaded Success', props<{historyExchangeRate: Array<HistoryExchangeRateType>}>());
