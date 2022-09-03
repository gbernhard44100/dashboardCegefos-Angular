import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { historyCalculIMCReducer } from '../states/historyCalculIMC/historyCalculIMC.reducer';
import { historyExchangeRateReducer } from '../states/historyExchangeRate/historyExchangeRate.reducer';
import { loginReducer } from '../states/login/login.reducer';
import { postReducer } from '../states/post/post.reducer';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        StoreModule.forRoot({
          postList: postReducer,
          loginStatus: loginReducer,
          historyCalculIMC: historyCalculIMCReducer,
          historyExchangeRate: historyExchangeRateReducer
        })
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
