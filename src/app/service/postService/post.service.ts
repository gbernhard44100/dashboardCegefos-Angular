import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostType } from 'src/app/types/post/PostType';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  savePost(newPost: PostType) {
    let postListStoredLocally = localStorage.getItem('postList')|| '[]';
    let postList = JSON.parse(postListStoredLocally);
    postList.push({
      title: newPost.title,
      content: newPost.content,
      loveIts: newPost.loveIts,
      created_at: newPost.created_at
    });
    localStorage.setItem('postList', JSON.stringify(postList));
  }

  getAll(): Observable<PostType[]> {
    return of(JSON.parse(localStorage.getItem('postList')|| '[]'));
  }

  deletePost(id: number): Observable<PostType[]> {
    let postList = JSON.parse(localStorage.getItem('postList')|| '[]');
    postList.splice(id, 1);
    localStorage.setItem('postList', JSON.stringify(postList));

    return of(postList);
  }
}
