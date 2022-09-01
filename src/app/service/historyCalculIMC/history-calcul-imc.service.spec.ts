import { TestBed } from '@angular/core/testing';

import { HistoryCalculIMCService } from './history-calcul-imc.service';

describe('HistoryCalculIMCService', () => {
  let service: HistoryCalculIMCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryCalculIMCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
