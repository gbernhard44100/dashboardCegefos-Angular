import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { historyCalculIMCReducer } from '../states/historyCalculIMC/historyCalculIMC.reducer';
import { historyExchangeRateReducer } from '../states/historyExchangeRate/historyExchangeRate.reducer';
import { loginReducer } from '../states/login/login.reducer';
import { postReducer } from '../states/post/post.reducer';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComponent ],
      imports:[
        StoreModule.forRoot({
          postList: postReducer,
          loginStatus: loginReducer,
          historyCalculIMC: historyCalculIMCReducer,
          historyExchangeRate: historyExchangeRateReducer
        })
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
