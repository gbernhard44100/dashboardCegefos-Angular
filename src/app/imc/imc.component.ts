import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ImcService } from '../service/imcService/imc.service';
import { FatnessResultType, instanceOfFatnessResult } from '../types/imc/FatnessResultType';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.scss']
})
export class IMCComponent implements OnInit {

  fatnessDataForm: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    height:  new FormControl(0),
    weight: new FormControl(0)
  });
  displayResults: Boolean = false;
  fatnessResult?: FatnessResultType;


  constructor(private imcService: ImcService) { }

  ngOnInit(): void {
  }

  onSubmit():void {
    let fatnessResult = this.imcService.fatnessResult(this.fatnessDataForm.value.height, this.fatnessDataForm.value.weight);
    if (instanceOfFatnessResult(fatnessResult)) {
      this.fatnessResult = fatnessResult;
      this.displayResults = true;
    } else {
      console.log('Something went wrong the IMC calculation');
    }
  }
}
