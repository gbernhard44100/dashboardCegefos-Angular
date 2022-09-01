import { TestBed } from '@angular/core/testing';

import { HistoryExchangeRateService } from './history-exchange-rate.service';

describe('HistoryExchangeRateService', () => {
  let service: HistoryExchangeRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryExchangeRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
