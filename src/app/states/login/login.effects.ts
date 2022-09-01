import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { LoginService } from 'src/app/service/loginService/login.service';
import { loginFailed, loginSuccess, submitCredentials } from './login.actions';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(submitCredentials),
      exhaustMap(action => {
        return this.loginService.handleLogin(action).pipe(
          map(user => loginSuccess({ user })),
          catchError(error => of(loginFailed({ error })))
        )
      }
        
      )
    )
  );

  constructor(
    private actions$: Actions,
    private loginService: LoginService
  ) {}
}
