import { Action, createReducer, on } from '@ngrx/store';
import { PostType } from 'src/app/types/post/PostType';
import { createdPost,hatedPost, likedPost, successfullyLoaded } from './post.actions';

const initialPostList: Array<PostType> = [];

const reducer = createReducer(
  initialPostList,
  on(
    successfullyLoaded,
    (state, {postList}) => postList
  ),
  on(
    createdPost,
    (state, { newPost }) => {
      return state.concat(newPost);
    }
  ),
  on(likedPost, (state, { postId }) => { 
    let newState = [...state];
    let updatedPost = {...state[postId]};
    updatedPost.loveIts++;
    newState[postId]= updatedPost;
    return newState;
  }),
  on(hatedPost, (state, { postId }) => { 
    let newState = [...state];
    let updatedPost = {...state[postId]};
    updatedPost.loveIts--;
    newState[postId]= updatedPost;
    return newState;
  })
);

export function postReducer(state: Array<PostType> | undefined, action: Action) {
  return reducer(state, action);
}