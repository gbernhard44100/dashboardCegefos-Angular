import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout } from '../states/login/login.actions';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private store: Store, private router: Router) {
    this.store.dispatch(logout());
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
