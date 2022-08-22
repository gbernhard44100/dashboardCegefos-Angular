import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostType } from '../types/post/PostType';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  postList$: Observable<Array<PostType>>;

  constructor(private store: Store<{ postList: Array<PostType> }>) {
    this.postList$ = this.store.select('postList');
  }

  ngOnInit(): void {}

}
