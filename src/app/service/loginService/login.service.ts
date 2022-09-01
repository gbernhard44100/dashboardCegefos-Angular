import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { LoginState } from 'src/app/states/login/login.reducer';
import { LoginType } from 'src/app/types/login/LoginType';
import { SubscriptionType } from 'src/app/types/subscription/SubscriptionType';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn$: Observable<LoginState>;

  constructor(private store: Store<{ loginStatus: LoginState }>, private router: Router) {
    this.isLoggedIn$ = this.store.select('loginStatus');
  }

  handleLogin(credentials: LoginType): Observable<SubscriptionType> {
    let user = this.findUser(credentials);
    this.validatePassword(credentials, user);
  
    return of(user);
  }

  findUser(credentials: LoginType) {
    let users:Array<SubscriptionType> = JSON.parse(
      localStorage.getItem('users')||'[]'
    );
    
    let correspondingUsers: Array<SubscriptionType> = [];
    if (users.length > 0) {
      correspondingUsers = users.filter(user => user.email === credentials.email)
    }
     

    if (correspondingUsers.length !== 1 ) {
      throw('Login failed');
    }

    this.router.navigate(['/']);
    return correspondingUsers[0];
  }

  validatePassword(credentials: LoginType, user: SubscriptionType) {
    if (credentials.password !== user.password) {
      throw('Login failed');
    }
  }
  
  isLoggedIn() {
    return this.isLoggedIn$;
  }
}
