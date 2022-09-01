import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConvertisseurDeviseService } from '../service/convertisseur-devise/convertisseur-devise.service';
import { ExchangeRateApiLatestResponseType } from '../types/convertisseur-devise/ExchangeRateApiLatestResponseType';

@Component({
  selector: 'app-convertisseur-devise',
  templateUrl: './convertisseur-devise.component.html',
  styleUrls: ['./convertisseur-devise.component.scss']
})
export class ConvertisseurDeviseComponent implements OnInit {

  exchangedAmountList: FormGroup = new FormGroup({
    usdAmount: new FormControl(),
    euroAmount: new FormControl(),
    yenAmount: new FormControl()
  });

  constructor(private convertisseurDeviseService: ConvertisseurDeviseService) { }

  ngOnInit(): void {
    this.exchangedAmountList.get('usdAmount')?.valueChanges.subscribe((newAmount: any) => {
      this.displayConvertedAmounts('USD', newAmount);
    });
    this.exchangedAmountList.get('euroAmount')?.valueChanges.subscribe((newAmount: any) => {
      this.displayConvertedAmounts('EUR', newAmount);
    });
    this.exchangedAmountList.get('yenAmount')?.valueChanges.subscribe((newAmount: any) => {
      this.displayConvertedAmounts('JPY', newAmount);
    });
  }

  private displayConvertedAmounts(basedCurrency: string, newAmount: number): void {
    this.convertisseurDeviseService.getExchangeRateListFromBase(basedCurrency)
    .subscribe({
      next: (data:ExchangeRateApiLatestResponseType) => {
        this.exchangedAmountList.setValue(
          {
            'usdAmount': this.getRoundAmount(newAmount * data.rates.USD, 2),
            'euroAmount': this.getRoundAmount(newAmount * data.rates.EUR, 2),
            'yenAmount': this.getRoundAmount(newAmount * data.rates.JPY, 0)
          },
          { emitEvent: false }
        );
        this.convertisseurDeviseService.storeExchangeRateHistoryLocally(
          this.getRoundAmount(newAmount * data.rates.USD, 2),
          this.getRoundAmount(newAmount * data.rates.EUR, 2),
          this.getRoundAmount(newAmount * data.rates.JPY, 0)
        )
      },
      error: (error: any) => {
        console.log('Erreur lors de la consultation de l\'API Exchange Rate');
      }
    });
  }

  private getRoundAmount(amount: number, decimals: number): number {
    return Math.round(amount * Math.pow(10, decimals)) / Math.pow(10, decimals);
  }
}
