import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, tap } from 'rxjs/operators';
import { PostService } from 'src/app/service/postService/post.service';
import { PostType } from 'src/app/types/post/PostType';
import { deletedPost, postSuccessfullyDeleted, requestLoad, successfullyLoaded } from './post.actions';

@Injectable()
export class PostEffects {

  loadPostList$ = createEffect(() => this.actions$.pipe(
    ofType(requestLoad.type),
    mergeMap(() => this.postService.getAll()
      .pipe(
        map(postList => (successfullyLoaded({postList}))),
        catchError(() => EMPTY)
      ))
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletedPost),
      exhaustMap(action => {
        return this.postService.deletePost(action.postId).pipe(
          map((postList) => postSuccessfullyDeleted({postList}))
        )
      })
    )
  );

  successfullyDeleted = createEffect(() =>
    this.actions$.pipe(
      ofType(postSuccessfullyDeleted),
      map(action => requestLoad()),
      tap(() => { 
        this.store.dispatch(requestLoad())
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private postService: PostService,
    private router: Router,
    private store: Store<{ postList: Array<PostType> }>
  ) {}
}