import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ConvertisseurDeviseService } from './convertisseur-devise.service';

describe('ConvertisseurDeviseService', () => {
  let service: ConvertisseurDeviseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ConvertisseurDeviseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
