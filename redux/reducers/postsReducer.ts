import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/postsActions';
import { IPostState } from '../../types/post';

const initialState: IPostState = {
  posts: [],
  error: '',
  currentPost: {
    title: '',
    body: '',
    id: 0,
  },
};

const postsReducer = createReducer(initialState, {
  [actions.handlePostsSuccess.type]: (state, { payload }) => ({
    ...state,
    posts: payload,
  }),
  [actions.handlePostsError.type]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
  [actions.handlePostSuccess.type]: (state, { payload }) => ({
    ...state,
    currentPost: payload,
  }),
  [actions.handlePostError.type]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
  [actions.postBlogSuccess.type]: (state, { payload }) => ({
    ...state,
    posts: [payload, ...state.posts],
  }),
  [actions.postBlogError.type]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
});

export default postsReducer;
