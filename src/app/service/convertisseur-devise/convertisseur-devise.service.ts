import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExchangeRateApiLatestResponseType } from '../../types/convertisseur-devise/ExchangeRateApiLatestResponseType';
import { map, Observable } from 'rxjs';
import { EnvironmentConfig } from 'src/environmentConfig';

@Injectable({
  providedIn: 'root'
})
export class ConvertisseurDeviseService {

  private static get AVAILABLE_CURRENCY_LIST(): string { return 'USD,EUR,JPY' };

  constructor(private httpClient: HttpClient) { }

  getExchangeRateListFromBase(basedCurrency: string): Observable<ExchangeRateApiLatestResponseType> {
    return this.httpClient.get<ExchangeRateApiLatestResponseType>(
      EnvironmentConfig.exchangeRateApiURL + 'latest?base=' + basedCurrency + '&symbols=USD,EUR,JPY',
      { 
        headers: {
          apikey: EnvironmentConfig.exchangeRateApiKey
        }
      }
    )
    .pipe();
  }

  storeExchangeRateHistoryLocally(usd: number, euro: number, yen: number) {
    let exchangeRateHistoryStoredLocally = localStorage.getItem('exchangeRateHistory')|| '[]';
    let exchangeRateHistory = JSON.parse(exchangeRateHistoryStoredLocally);
    exchangeRateHistory.push({
      usd: usd,
      euro: euro,
      yen: yen
    });
    localStorage.setItem('exchangeRateHistory', JSON.stringify(exchangeRateHistory));
  }  
}
