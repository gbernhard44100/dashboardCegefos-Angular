import { createAction, props } from '@ngrx/store';
import { PostType } from 'src/app/types/post/PostType';

export const createdPost = createAction('[Post List Component] Created post', props<{ newPost: PostType }>());

export const deletedPost = createAction('[Post Component] Deleted post', props<{ postId: number }>());
export const likedPost = createAction('[Post Component] Liked post', props<{ postId: number }>());
export const hatedPost = createAction('[Post Component] Hated post', props<{ postId: number }>());