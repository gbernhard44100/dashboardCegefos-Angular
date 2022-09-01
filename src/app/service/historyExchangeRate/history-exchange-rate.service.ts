import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HistoryExchangeRateType } from 'src/app/types/convertisseur-devise/historyExchangeRateType';

@Injectable({
  providedIn: 'root'
})
export class HistoryExchangeRateService {

  constructor() { }

  getAll(): Observable<HistoryExchangeRateType[]> {
    return of(JSON.parse(localStorage.getItem('exchangeRateHistory')|| '[]'));
  }
}
