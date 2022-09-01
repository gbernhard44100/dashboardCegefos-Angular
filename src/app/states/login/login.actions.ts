import { createAction, props } from '@ngrx/store';
import { SubscriptionType } from 'src/app/types/subscription/SubscriptionType';

export const submitCredentials = createAction('[Login Component] Submit credentials', props<{email: string, password: string}>());
export const loginSuccess = createAction('[Login Component] Login success', props<{ user: SubscriptionType }>());
export const loginFailed = createAction('[Login Component] Login failed', props<{ error: Error }>())
export const logout = createAction('[Login Component] Logout')
