import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createdPost } from '../states/post/post.actions';
import { PostType } from '../types/post/PostType';
import { Router } from "@angular/router"


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  newPost: FormGroup = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
  });

  constructor(private router: Router, private store: Store) { }

  ngOnInit(): void {
  }

  ngOnSubmit(): void {
    let newPost: PostType = {
      title: this.newPost.get('title')?.value,
      content: this.newPost.get('content')?.value,
      loveIts: 0,
      created_at: new Date()
    };
    this.store.dispatch(createdPost({newPost}));

    this.router.navigate(['/posts']);
  }

}
