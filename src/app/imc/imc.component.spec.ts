import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { IMCComponent } from './imc.component';

describe('IMCComponent', () => {
  let component: IMCComponent;
  let fixture: ComponentFixture<IMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ IMCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
