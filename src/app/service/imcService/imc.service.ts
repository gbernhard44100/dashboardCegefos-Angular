import { Injectable } from '@angular/core';
import { FatnessResultType } from 'src/app/types/imc/FatnessResultType';
import { FatnessType } from 'src/app/types/imc/FatnessType';
import { FatnessData } from './FatnessData';

@Injectable({
  providedIn: 'root'
})
export class ImcService {

  private fatnessTypeList: Array<FatnessType>;

  private IMCDecimals: number = 2;

  constructor() {
    this.fatnessTypeList = FatnessData;
  }

  public fatnessResult(height: number, weight: number) : FatnessResultType | undefined {
    let imc: number = this.calculateIMC(height, weight);

    return {
      fatnessType: this.fatnessTypeList.find((fatnessType) => imc < fatnessType.maxTresholdIMC),
      imc: imc
    };
  }

  private calculateIMC(height: number, weight: number): number {
    return (
      Math.round((weight / Math.pow(height / 100, 2) * Math.pow(10, this.IMCDecimals))) / Math.pow(10, this.IMCDecimals)
    );
  }
}
