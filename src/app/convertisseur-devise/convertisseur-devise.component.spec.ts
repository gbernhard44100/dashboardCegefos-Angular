import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertisseurDeviseComponent } from './convertisseur-devise.component';

describe('ConvertisseurDeviseComponent', () => {
  let component: ConvertisseurDeviseComponent;
  let fixture: ComponentFixture<ConvertisseurDeviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ConvertisseurDeviseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertisseurDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
