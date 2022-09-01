import { Action, createReducer, on } from '@ngrx/store';
import { SubscriptionType } from 'src/app/types/subscription/SubscriptionType';
import { loginSuccess, logout } from './login.actions';

export interface LoginState {
  loggedIn: boolean;
  user: SubscriptionType | null;
}

const initialLoginState: LoginState = {
  loggedIn: false,
  user: null
};

const reducer = createReducer(
  initialLoginState,
  on(
    loginSuccess,
    (state, { user }) => ({...state, loggedIn: true, user: user})
  ),
  on(
    logout,
    state => initialLoginState  
  )
);

export function loginReducer(state: LoginState | undefined, action: Action) {
  return reducer(state, action);
}
