import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ConvertisseurDeviseComponent } from './convertisseur-devise.component';

describe('ConvertisseurDeviseComponent', () => {
  let component: ConvertisseurDeviseComponent;
  let fixture: ComponentFixture<ConvertisseurDeviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule],
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
