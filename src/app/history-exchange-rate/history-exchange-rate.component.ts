import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { requestLoad } from '../states/historyExchangeRate/historyExchangeRate.actions';
import { HistoryExchangeRateType } from '../types/convertisseur-devise/historyExchangeRateType';

@Component({
  selector: 'app-history-exchange-rate',
  templateUrl: './history-exchange-rate.component.html',
  styleUrls: ['./history-exchange-rate.component.scss']
})
export class HistoryExchangeRateComponent implements OnInit {

  historyExchangeRate$: Observable<HistoryExchangeRateType[]> = of([]);

  constructor(private store: Store<{historyExchangeRate: HistoryExchangeRateType[]}>) { }

  ngOnInit(): void {
    this.historyExchangeRate$ = this.store.select('historyExchangeRate');
    this.store.dispatch(requestLoad());
  }

}
