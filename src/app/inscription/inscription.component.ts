import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  subscription: FormGroup = new FormGroup({
    lastname: new FormControl(''),
    firstname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmedPassword: new FormControl(''),
    birthDate: new FormControl(),
    address: new FormControl(''),
    postalCode: new FormControl(''),
    city: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
