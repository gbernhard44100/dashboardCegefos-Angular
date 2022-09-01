import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { requestLoad } from '../states/historyCalculIMC/historyCalculIMC.actions';
import { HistoryCalculIMCType } from '../types/imc/historyCalculIMCType';

@Component({
  selector: 'app-history-calcul-imc',
  templateUrl: './history-calcul-imc.component.html',
  styleUrls: ['./history-calcul-imc.component.scss']
})
export class HistoryCalculIMCComponent implements OnInit {

  historyCalculIMC$: Observable<HistoryCalculIMCType[]> = of([]);

  constructor(private store: Store<{historyCalculIMC: HistoryCalculIMCType[]}>) { }

  ngOnInit(): void {
    this.historyCalculIMC$ = this.store.select('historyCalculIMC');
    this.store.dispatch(requestLoad());
  }

}
