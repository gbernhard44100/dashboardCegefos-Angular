import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { historyCalculIMCReducer } from '../states/historyCalculIMC/historyCalculIMC.reducer';
import { historyExchangeRateReducer } from '../states/historyExchangeRate/historyExchangeRate.reducer';
import { loginReducer } from '../states/login/login.reducer';
import { postReducer } from '../states/post/post.reducer';

import { HistoryExchangeRateComponent } from './history-exchange-rate.component';

describe('HistoryExchangeRateComponent', () => {
  let component: HistoryExchangeRateComponent;
  let fixture: ComponentFixture<HistoryExchangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryExchangeRateComponent ],
      imports: [
        StoreModule.forRoot({
          postList: postReducer,
          loginStatus: loginReducer,
          historyCalculIMC: historyCalculIMCReducer,
          historyExchangeRate: historyExchangeRateReducer
        })
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryExchangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
