import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { historyCalculIMCReducer } from 'src/app/states/historyCalculIMC/historyCalculIMC.reducer';
import { historyExchangeRateReducer } from 'src/app/states/historyExchangeRate/historyExchangeRate.reducer';
import { loginReducer } from 'src/app/states/login/login.reducer';
import { postReducer } from 'src/app/states/post/post.reducer';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({
          postList: postReducer,
          loginStatus: loginReducer,
          historyCalculIMC: historyCalculIMCReducer,
          historyExchangeRate: historyExchangeRateReducer
        })
      ]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
