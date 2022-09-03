import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { historyCalculIMCReducer } from '../states/historyCalculIMC/historyCalculIMC.reducer';
import { historyExchangeRateReducer } from '../states/historyExchangeRate/historyExchangeRate.reducer';
import { loginReducer } from '../states/login/login.reducer';
import { postReducer } from '../states/post/post.reducer';

import { MainGuard } from './main.guard';

describe('MainGuardGuard', () => {
  let guard: MainGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        StoreModule.forRoot({
          postList: postReducer,
          loginStatus: loginReducer,
          historyCalculIMC: historyCalculIMCReducer,
          historyExchangeRate: historyExchangeRateReducer
        })
      ]
    });
    guard = TestBed.inject(MainGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
