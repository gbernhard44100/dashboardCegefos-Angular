import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { submitCredentials } from '../states/login/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authentication: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    try {
      this.store.dispatch(submitCredentials(this.authentication.value));
    } catch (error) {
      console.log(error)
      alert('Echec de l\'authentification');
    }
  }
}
