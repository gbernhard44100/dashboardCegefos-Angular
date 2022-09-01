import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HistoryCalculIMCService } from 'src/app/service/historyCalculIMC/history-calcul-imc.service';
import { requestLoad, successfullyLoaded } from './historyCalculIMC.actions';

@Injectable()
export class HistoryCalculIMCEffects {

  loadHistoryCalculIMC$ = createEffect(() => this.actions$.pipe(
    ofType(requestLoad.type),
    mergeMap(() => this.historyCalculIMCService.getAll()
      .pipe(
        map(historyCalculIMC => (successfullyLoaded({historyCalculIMC}))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private historyCalculIMCService: HistoryCalculIMCService
  ) {}
}