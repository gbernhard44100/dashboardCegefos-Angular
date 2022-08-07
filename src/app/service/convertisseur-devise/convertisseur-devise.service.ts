import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExchangeRateApiLatestResponseType } from '../../types/convertisseur-devise/ExchangeRateApiLatestResponseType';
import { Observable } from 'rxjs';
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
}
