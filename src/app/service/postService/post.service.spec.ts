import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';

const mockLocalStorage = () => {
  var store:{ [key: string]: string; } = {};
  const mockLocalStorage = {
    getItem: (key: string): string | null => {
      return key in store ? store[key] : null;
    },
    setItem: (key: string, value: string) => {
      store[key] = `${value}`;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };
  spyOn(localStorage, 'getItem')
    .and.callFake(mockLocalStorage.getItem);
  spyOn(localStorage, 'setItem')
    .and.callFake(mockLocalStorage.setItem);
  spyOn(localStorage, 'removeItem')
    .and.callFake(mockLocalStorage.removeItem);
  spyOn(localStorage, 'clear')
    .and.callFake(mockLocalStorage.clear);
}

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    mockLocalStorage();
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save the new post', () => {
    service.savePost({
      title: 'testPost',
      content: 'Here is the content of the test post',
      loveIts: 0,
      created_at: new Date(2018, 11, 24, 10, 33, 30, 0)
    });
    expect(localStorage.getItem('postList'))
      .toBe(
        '[{"title":"testPost","content":"Here is the content of the test post","loveIts":0,"created_at":"2018-12-24T02:33:30.000Z"}]'
      );
  });

  it('shouldn\'t save a new post if the title is missing', () => {
    expect(() => {
      service.savePost({
        title: '',
        content: 'Here is the content of the test post',
        loveIts: 0,
        created_at: new Date(2018, 11, 24, 10, 33, 30, 0)
      })
    }).toThrow('Le titre est manquant');

    expect(localStorage.getItem('postList')).toBe(null);
  });

  it('shouldn\'t save a new post if the content of the post is missing', () => {
    expect(() => {
      service.savePost({
        title: 'testPost',
        content: '',
        loveIts: 0,
        created_at: new Date(2018, 11, 24, 10, 33, 30, 0)
      })
    }).toThrow('Le texte du post est manquant');

    expect(localStorage.getItem('postList')).toBe(null);
  });
});
