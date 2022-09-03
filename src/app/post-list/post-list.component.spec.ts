import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { historyCalculIMCReducer } from '../states/historyCalculIMC/historyCalculIMC.reducer';
import { historyExchangeRateReducer } from '../states/historyExchangeRate/historyExchangeRate.reducer';
import { loginReducer } from '../states/login/login.reducer';
import { postReducer } from '../states/post/post.reducer';

import { PostListComponent } from './post-list.component';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListComponent ],
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

    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
