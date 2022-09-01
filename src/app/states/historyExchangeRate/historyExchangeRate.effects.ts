import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HistoryExchangeRateService } from 'src/app/service/historyExchangeRate/history-exchange-rate.service';
import { requestLoad, successfullyLoaded } from './historyExchangeRate.actions';

@Injectable()
export class HistoryExchangeRateEffects {

  loadHistoryExchangeRate$ = createEffect(() => this.actions$.pipe(
    ofType(requestLoad.type),
    mergeMap(() => this.historyExchangeRateService.getAll()
      .pipe(
        map(historyExchangeRate => (successfullyLoaded({historyExchangeRate}))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private historyExchangeRateService: HistoryExchangeRateService
  ) {}
}