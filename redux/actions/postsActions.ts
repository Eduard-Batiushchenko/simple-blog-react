import { createAction } from '@reduxjs/toolkit';
import { IPost } from '../../types/post';

const handlePostsRequest = createAction('posts/handlePostsRequest');
const handlePostsSuccess = createAction<IPost[]>('posts/handlePostsSuccess');
const handlePostsError = createAction<string>('posts/handlePostsError');

const handlePostRequest = createAction('posts/handlePostRequest');
const handlePostSuccess = createAction<IPost>('posts/handlePostSuccess');
const handlePostError = createAction<string>('posts/handlePostError');

const postBlogRequest = createAction('posts/postBlogRequest');
const postBlogSuccess = createAction<IPost>('posts/postBlogSuccess');
const postBlogError = createAction<string>('posts/postBlogError');

export default {
  handlePostsRequest,
  handlePostsSuccess,
  handlePostsError,
  handlePostRequest,
  handlePostSuccess,
  handlePostError,
  postBlogRequest,
  postBlogSuccess,
  postBlogError,
};
