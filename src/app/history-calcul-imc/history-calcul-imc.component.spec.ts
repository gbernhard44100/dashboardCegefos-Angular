import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCalculIMCComponent } from './history-calcul-imc.component';

describe('HistoryCalculIMCComponent', () => {
  let component: HistoryCalculIMCComponent;
  let fixture: ComponentFixture<HistoryCalculIMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryCalculIMCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryCalculIMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
