import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { historyCalculIMCReducer } from '../states/historyCalculIMC/historyCalculIMC.reducer';
import { historyExchangeRateReducer } from '../states/historyExchangeRate/historyExchangeRate.reducer';
import { loginReducer } from '../states/login/login.reducer';
import { postReducer } from '../states/post/post.reducer';

import { PostComponent } from './post.component';
import { of } from 'rxjs';
import { hatedPost, likedPost } from '../states/post/post.actions';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let store: MockStore;
  const localStorageMockedValue = {
    postList: [
      {"title":"first test post","content":"Here is the content of the first test post","loveIts":0,"created_at":"2018-12-24T02:33:30.000Z"},
      {"title":"second test post","content":"Here is the content of the second test post","loveIts":3,"created_at":"2018-12-24T02:33:30.000Z"},
      {"title":"last test post","content":"Here is the content of the last test post","loveIts":7,"created_at":"2018-12-24T02:33:30.000Z"}
    ]
  };

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
      ],
      providers: [
        provideMockStore({ initialState: localStorageMockedValue}),
      ],
    })
    .compileComponents();

    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch likePost action to increment loveIts counter', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough(); 

    component.incrementLoveIts(1);

    expect(dispatchSpy).toHaveBeenCalledWith(likedPost({postId: 1}));
  });

  it('should dispatch hatedPost action to decrement loveIts counter', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough(); 

    component.decrementLoveIts(2);

    expect(dispatchSpy).toHaveBeenCalledWith(hatedPost({postId: 2}));
  });
});
