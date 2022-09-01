import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HistoryCalculIMCType } from 'src/app/types/imc/historyCalculIMCType';

@Injectable({
  providedIn: 'root'
})
export class HistoryCalculIMCService {

  constructor() { }

  getAll(): Observable<HistoryCalculIMCType[]> {
    return of(JSON.parse(localStorage.getItem('imcHistory')|| '[]'));
  }
}
