import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deletedPost, hatedPost, likedPost } from '../states/post/post.actions';
import { PostType } from '../types/post/PostType';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() id: number = 0;
  @Input() post: PostType = {
    title: '',
    content: '',
    loveIts: 0,
    created_at: new Date()
  };
  loveItsCount$: Observable<number>;

  constructor(private store: Store<{likePostCount: number}>) {
    this.loveItsCount$ = store.select('likePostCount');
  }

  ngOnInit(): void {
  }

  incrementLoveIts(postId: number) {
    this.store.dispatch(likedPost({postId}));
  }

  decrementLoveIts(postId: number) {
    this.store.dispatch(hatedPost({postId}));
  }

  deletePost(postId: number) {
    this.store.dispatch(deletedPost({postId}));
  }

}
