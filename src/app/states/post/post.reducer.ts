import { Action, createReducer, on } from '@ngrx/store';
import { PostType } from 'src/app/types/post/PostType';
import { createdPost,deletedPost,hatedPost, likedPost } from './post.actions';

const initialPostList: Array<PostType> = [{
  title: 'Mon premier post',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt ac purus sit amet convallis. Curabitur vel neque felis. Cras elit tortor, scelerisque nec purus a, accumsan commodo ligula. Sed faucibus ullamcorper mi et scelerisque. Proin tellus tortor, bibendum sit amet dolor a, tincidunt vehicula nibh. Donec at felis tellus. Vestibulum et turpis risus. Nunc nec auctor lectus, in aliquam ipsum. Quisque varius, lectus ac molestie dapibus, est metus mollis nibh, eu aliquam dolor quam et est.',
  loveIts: 0,
  created_at: new Date(2018, 11, 24, 10, 33, 30)
},
{
  title: 'Mon deuxième post',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt ac purus sit amet convallis. Curabitur vel neque felis. Cras elit tortor, scelerisque nec purus a, accumsan commodo ligula. Sed faucibus ullamcorper mi et scelerisque. Proin tellus tortor, bibendum sit amet dolor a, tincidunt vehicula nibh. Donec at felis tellus. Vestibulum et turpis risus. Nunc nec auctor lectus, in aliquam ipsum. Quisque varius, lectus ac molestie dapibus, est metus mollis nibh, eu aliquam dolor quam et est.',
  loveIts: 0,
  created_at: new Date(2020, 4, 1, 15, 45, 30)
}];

export const postReducer = createReducer(
  initialPostList,
  on(
    createdPost,
    (state, { newPost }) => {
      console.log(state);
      return state.concat(newPost);
    }
  ),
  on(likedPost, (state, { postId }) => { 
    state[postId].loveIts++;
    return state;
  }),
  on(hatedPost, (state, { postId }) => { 
    state[postId].loveIts--;
    return state;
  }),
  on(deletedPost, (state, { postId }) => { 
    state.splice(postId, 1);
    return state;
  })
);
/**
export function postReducer(state: Array<PostType> | undefined, action: Action) {
  return reducer(state, action);
}*/