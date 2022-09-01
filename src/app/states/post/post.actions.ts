import { createAction, props } from '@ngrx/store';
import { PostType } from 'src/app/types/post/PostType';

export const createdPost = createAction('[Post List Component] Created post', props<{ newPost: PostType }>());
export const requestLoad = createAction('[Post List Component] Request load');
export const successfullyLoaded = createAction('[Post List Component] Post list Loaded Successfully', props<{postList: Array<PostType>}>());

export const deletedPost = createAction('[Post Component] Delete post', props<{ postId: number }>());
export const postSuccessfullyDeleted = createAction('[Post Component] Post successfully deleted', props<{postList: Array<PostType>}>());
export const likedPost = createAction('[Post Component] Liked post', props<{ postId: number }>());
export const hatedPost = createAction('[Post Component] Hated post', props<{ postId: number }>());

