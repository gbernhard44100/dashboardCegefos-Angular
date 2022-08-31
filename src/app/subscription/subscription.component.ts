import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SubscriptionService } from '../service/inscriptionService/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

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

  constructor(
    private subscriptionService: SubscriptionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    try {
      this.subscriptionService.handleSubscription(this.subscription.value);
      this.router.navigate(['/']);
    } catch (error) {
      console.log(error)
    }
  }

}
