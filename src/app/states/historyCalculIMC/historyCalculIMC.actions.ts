import { createAction, props } from '@ngrx/store';
import { HistoryCalculIMCType } from 'src/app/types/imc/historyCalculIMCType';

export const requestLoad = createAction('[historyCalculIMC] Request load');
export const successfullyLoaded = createAction('[historyCalculIMC] History Loaded Success', props<{historyCalculIMC: Array<HistoryCalculIMCType>}>());
