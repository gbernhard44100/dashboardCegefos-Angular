import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryExchangeRateComponent } from './history-exchange-rate.component';

describe('HistoryExchangeRateComponent', () => {
  let component: HistoryExchangeRateComponent;
  let fixture: ComponentFixture<HistoryExchangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryExchangeRateComponent ]
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
